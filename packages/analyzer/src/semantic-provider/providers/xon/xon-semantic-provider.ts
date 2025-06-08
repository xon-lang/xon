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
import {newText, newTextFileResource, newUri, Nothing, Text, Uri} from '#common';
import {Brand, is} from '#typing';
import {dirname, resolve} from 'node:path';

export type XonSemanticProvider = SemanticProvider & Brand<'Analyzer.XonSemanticProvider'>;

export const $XonSemanticProvider = () =>
  $AnalyzerType<XonSemanticProvider>('XonSemanticProvider', $SemanticProvider());

export function newXonSemanticProvider(): XonSemanticProvider {
  return {
    $: $XonSemanticProvider(),

    provideSemantic(contextUri: Uri, uri: Uri, text?: Text | Nothing): Semantic | Nothing {
      if (text) {
        return getSemanticFromText(uri, text);
      }

      return getSemanticFromUri(contextUri, uri);
    },
  };
}

function getSemanticFromUri(contextUri: Uri, importUri: Uri): Semantic | Nothing {
  const uri = resolveFullUri(contextUri, importUri);
  const file = newTextFileResource(uri);

  return getSemanticFromText(uri, file.content());
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

function resolveFullUri(contextUri: Uri, importUri: Uri): Uri {
  const contextDirPath = dirname(contextUri.value.toNativeString());

  return newUri(newText(resolve(contextDirPath, importUri.value.toNativeString())));
}
