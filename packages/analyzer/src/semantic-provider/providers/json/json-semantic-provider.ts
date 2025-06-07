import {
  $AnalyzerType,
  $SemanticProvider,
  newAttributeDeclarationSemantic,
  newIntegerTypeSemantic,
  newObjectTypeSemantic,
  newSemanticScope,
  newStringTypeSemantic,
  ObjectTypeSemantic,
  Semantic,
  SemanticProvider,
  TypeSemantic,
} from '#analyzer';
import {newText, newTextReference, newUri, Nothing, nothing, Text, Uri} from '#common';
import {
  antrlRangeToXonRange,
  Json5Context,
  JsonGrammarLexer,
  JsonGrammarParser,
  ObjContext,
  ValueContext,
} from '#grammar';
import {Brand} from '#typing';
import {CharStream, CommonTokenStream, ParserRuleContext} from 'antlr4';
import {readFile} from 'node:fs/promises';
import {dirname, resolve} from 'node:path';

export type JsonSemanticProvider = SemanticProvider & Brand<'Analyzer.JsonSemanticProvider'>;

export const $JsonSemanticProvider = () =>
  $AnalyzerType<JsonSemanticProvider>('JsonSemanticProvider', $SemanticProvider());

export function newJsonSemanticProvider(): JsonSemanticProvider {
  return {
    $: $JsonSemanticProvider(),

    async provideSemantic(
      contextUri: Uri,
      importUri: Uri,
      text?: Text | Nothing,
    ): Promise<Semantic | Nothing> {
      const uri = resolveFullUri(contextUri, importUri);

      if (text) {
        return getSemanticFromText(uri, text);
      }

      return getSemanticFromUri(uri);
    },
  };
}

function resolveFullUri(contextUri: Uri, importUri: Uri): Uri {
  const contextDirPath = dirname(contextUri.value.toNativeString());

  return newUri(newText(resolve(contextDirPath, importUri.value.toNativeString())));
}

async function getSemanticFromUri(uri: Uri): Promise<Semantic | Nothing> {
  const buffer = await readFile(uri.value.toNativeString());
  const text = newText(buffer.toString());

  return getSemanticFromText(uri, text);
}

function getSemanticFromText(uri: Uri, text: Text): Semantic | Nothing {
  const tree = getJsonTree(text);

  return parseJsonTree(uri, tree);
}

function getJsonTree(text: Text): Json5Context {
  const chars = new CharStream(text.toNativeString()); // replace this with a FileStream as required
  const lexer = new JsonGrammarLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new JsonGrammarParser(tokens);
  const tree = parser.json5();

  return tree;
}

function parseJsonTree(uri: Uri, tree: Json5Context): Semantic | Nothing {
  const value: ParserRuleContext =
    tree.value().obj() ??
    tree.value().arr() ??
    tree.value().number_() ??
    tree.value().STRING() ??
    tree.value().LITERAL();

  if (value instanceof ObjContext) {
    return parseJsonObject(uri, value);
  }

  // if (value instanceof ArrContext) {
  //   return parseJsonObject(uri, value);
  // }

  return nothing;
}

function parseJsonObject(uri: Uri, object: ObjContext): ObjectTypeSemantic {
  const scope = newSemanticScope();

  for (const pair of object.pair_list()) {
    const key = pair.key();

    // todo should we use non string keys ??? (json5 ???)
    if (!key.getText().startsWith('"')) {
      continue;
    }

    const valueType = getValueType(pair.value());

    if (!valueType) {
      continue;
    }

    const range = antrlRangeToXonRange(key);
    const reference = newTextReference(uri, range);

    const declaration = newAttributeDeclarationSemantic(
      reference,
      nothing,
      newText(key.getText().replace(/^\"/, '').replace(/\"$/, '')),
      valueType,
    );

    scope.add(declaration);
  }

  return newObjectTypeSemantic(scope);
}

function getValueType(valueContext: ValueContext): TypeSemantic | Nothing {
  if (valueContext.STRING()) {
    return newStringTypeSemantic(newText(valueContext.getText().replace(/^\"/, '').replace(/\"$/, '')));
  }

  // todo use different semantics for each type of number (+1.e2, 1234, 1234.5, -.2e3, 0x12345678, Infinity, NaN, ...)
  if (valueContext.number_()) {
    return newIntegerTypeSemantic(parseFloat(valueContext.number_().getText()));
  }

  return null;
}
