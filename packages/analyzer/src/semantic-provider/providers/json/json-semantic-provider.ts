import {
  $AnalyzerType,
  $SemanticProvider,
  newAttributeDeclarationSemantic,
  newObjectTypeSemantic,
  newSemanticScope,
  newStringTypeSemantic,
  ObjectTypeSemantic,
  Semantic,
  SemanticProvider,
} from '#analyzer';
import {newText, newTextReference, Nothing, nothing, Text, Uri} from '#common';
import {antrlRangeToXonRange, Json5Context, JsonGrammarLexer, JsonGrammarParser, ObjContext} from '#grammar';
import {Brand} from '#typing';
import {CharStream, CommonTokenStream, ParserRuleContext} from 'antlr4';
import {readFile} from 'node:fs/promises';

export type JsonSemanticProvider = SemanticProvider & Brand<'Analyzer.JsonSemanticProvider'>;

export const $JsonSemanticProvider = () =>
  $AnalyzerType<JsonSemanticProvider>('JsonSemanticProvider', $SemanticProvider());

export function newJsonSemanticProvider(): JsonSemanticProvider {
  return {
    $: $JsonSemanticProvider(),

    async provideSemantic(uri: Uri, text?: Text | Nothing): Promise<Semantic | Nothing> {
      if (text) {
        return getSemanticFromText(uri, text);
      }

      return getSemanticFromUri(uri);
    },
  };
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
    const value = pair.value();

    // todo should we use non string keys ??? (json5 ???)
    if (!key.getText().startsWith('"')) {
      continue;
    }

    const range = antrlRangeToXonRange(key);
    const reference = newTextReference(uri, range);

    const declaration = newAttributeDeclarationSemantic(
      reference,
      nothing,
      newText(key.getText().replace(/^\"/, '').replace(/\"$/, '')),
      newStringTypeSemantic(newText(value.getText())),
    );

    scope.add(declaration);
  }

  return newObjectTypeSemantic(scope);
}

// function parseJsonArray (uri: Uri, object: ArrContext): ArrayTypeSemantic {

// }
