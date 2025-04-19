import {
  $AnalyzerType,
  $DeclarationSemantic,
  $DeclarationStatementNode,
  $SemanticProvider,
  newAnalyzerContext,
  newCharacterStreamFromText,
  newObjectTypeSemantic,
  newSemanticContext,
  newSemanticScope,
  parseStatements,
  Semantic,
  SemanticProvider,
} from '#analyzer';
import {Boolean2, newText, Nothing, Text, Uri} from '#common';
import {Brand, is} from '#typing';
import {readFileSync} from 'node:fs';

export type XonSemanticProvider = SemanticProvider & Brand<'Analyzer.XonSemanticProvider'>;

export const $XonSemanticProvider = () =>
  $AnalyzerType<XonSemanticProvider>('XonSemanticProvider', $SemanticProvider());

export function newXonSemanticProvider(): XonSemanticProvider {
  return {
    $: $XonSemanticProvider(),

    canProvide(uri: Uri): Boolean2 {
      return uri.value.lowerCase().endsWith(newText('.xon'));
    },

    provideSemantic(uri: Uri, text?: Text | Nothing): Semantic | Nothing {
      if (text) {
        return getSemanticFromText(uri, text);
      }

      return getSemanticFromUri(uri);
    },
  };
}

function getSemanticFromUri(uri: Uri): Semantic {
  // todo use async version of 'readFileSync'
  const buffer = readFileSync(uri.value.toNativeString());
  const text = newText(buffer.toString());

  return getSemanticFromText(uri, text);
}

function getSemanticFromText(uri: Uri, text: Text): Semantic {
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

  return newObjectTypeSemantic(semanticScope);
}
