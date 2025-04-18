import {
  $AnalyzerType,
  $SemanticProvider,
  FileSemanticProvider,
  newAttributeDeclarationSemantic,
  newSemanticScope,
  newStringTypeSemantic,
  SemanticScope,
} from '#analyzer';
import {
  Boolean2,
  newText,
  newTextPosition,
  newTextRange,
  newTextReference,
  nothing,
  TextPosition,
  TextRange,
  Uri,
} from '#common';
import {JsonGrammarLexer, JsonGrammarParser} from '#grammar';
import {Brand} from '#typing';
import {CharStream, CommonTokenStream, ParserRuleContext, Token} from 'antlr4';
import {readFileSync} from 'node:fs';

export type JsonFileSemanticProvider = FileSemanticProvider & Brand<'Analyzer.JsonFileSemanticProvider'>;

export const $JsonFileSemanticProvider = () =>
  $AnalyzerType<JsonFileSemanticProvider>('JsonFileSemanticProvider', $SemanticProvider());

export function newJsonFileImportProvider(): JsonFileSemanticProvider {
  return {
    $: $JsonFileSemanticProvider(),

    canProvide(uri: Uri): Boolean2 {
      return uri.value.lowerCase().endsWith(newText('.json'));
    },

    provideSemantic(uri: Uri): SemanticScope {
      return getDeclarationsFromUri(uri);
    },
  };
}

function getDeclarationsFromUri(uri: Uri): SemanticScope {
  // todo use async version of 'readFileSync'
  const buffer = readFileSync(uri.value.toNativeString());
  const object = JSON.parse(buffer.toString());
  const semanticScope = newSemanticScope();

  return jsonToObjectTypeSemantic(uri);
}

function jsonToObjectTypeSemantic(uri: Uri): SemanticScope {
  const buffer = readFileSync(uri.value.toNativeString());
  const input = buffer.toString();
  const chars = new CharStream(input); // replace this with a FileStream as required
  const lexer = new JsonGrammarLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new JsonGrammarParser(tokens);
  const tree = parser.obj();

  const scope = newSemanticScope();

  for (const pair of tree.pair_list()) {
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

  return scope;
}

function antrlPositionToXonPosition(token: Token): TextPosition {
  return newTextPosition(token.start, token.line - 1, token.column);
}

function antrlRangeToXonRange(ruleContext: ParserRuleContext): TextRange {
  const start = antrlPositionToXonPosition(ruleContext.start);
  const stop = ruleContext.stop ? antrlPositionToXonPosition(ruleContext.stop) : start.clone();

  return newTextRange(start, stop);
}
