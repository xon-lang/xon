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
import {newText, Nothing, Text, Uri} from '#common';
import {Brand, is} from '#typing';
import {readFile} from 'node:fs/promises';

export type XonSemanticProvider = SemanticProvider & Brand<'Analyzer.XonSemanticProvider'>;

export const $XonSemanticProvider = () =>
  $AnalyzerType<XonSemanticProvider>('XonSemanticProvider', $SemanticProvider());

export function newXonSemanticProvider(): XonSemanticProvider {
  return {
    $: $XonSemanticProvider(),

    async provideSemantic(uri: Uri, text?: Text | Nothing): Promise<Semantic | Nothing> {
      if (text) {
        return getSemanticFromText(uri, text);
      }

      return getSemanticFromUri(uri);
    },
  };
}

async function getSemanticFromUri(uri: Uri): Promise<Semantic> {
  const buffer = await readFile(uri.value.toNativeString());
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
