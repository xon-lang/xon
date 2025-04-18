import {
  $AnalyzerType,
  $DeclarationSemantic,
  $DeclarationStatementNode,
  $SemanticProvider,
  FileSemanticProvider,
  newAnalyzerContext,
  newCharacterStreamFromText,
  newSemanticContext,
  newSemanticScope,
  parseStatements,
  Semantic,
  SemanticScope,
} from '#analyzer';
import {Boolean2, newText, Uri} from '#common';
import {Brand, is} from '#typing';
import {readFileSync} from 'node:fs';

export type XonFileSemanticProvider = FileSemanticProvider & Brand<'Analyzer.XonFileSemanticProvider'>;

export const $XonFileSemanticProvider = () =>
  $AnalyzerType<XonFileSemanticProvider>('XonFileSemanticProvider', $SemanticProvider());

export function newXonFileSemanticProvider(): XonFileSemanticProvider {
  return {
    $: $XonFileSemanticProvider(),

    canProvide(uri: Uri): Boolean2 {
      return uri.value.lowerCase().endsWith(newText('.xon'));
    },

    provideSemantic(uri: Uri): SemanticScope {
      return getSemanticFromUri(uri);
    },
  };
}

function getSemanticFromUri(uri: Uri): SemanticScope {
  // todo use async version of 'readFileSync'
  const buffer = readFileSync(uri.value.toNativeString());
  const text = newText(buffer.toString());
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const {statements} = parseStatements(context);
  const semanticContext = newSemanticContext(uri);
  const semanticScope = newSemanticScope();

  for (const statement of statements) {
    statement.semantify && statement.semantify(semanticContext);

    if (is(statement, $DeclarationStatementNode()) && is(statement.semantic, $DeclarationSemantic())) {
      semanticScope.add(statement.semantic);
    }
  }

  return semanticScope;
}
