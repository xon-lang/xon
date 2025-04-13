import {
  $AnalyzerType,
  $DeclarationSemantic,
  $DeclarationStatementNode,
  $ImportProvider,
  DeclarationScope,
  FileImportProvider,
  newAnalyzerContext,
  newCharacterStreamFromText,
  newDeclarationScope,
  newSemanticContext,
  parseStatements,
} from '#analyzer';
import {Boolean2, newText, Uri} from '#common';
import {Brand, is} from '#typing';
import {readFileSync} from 'node:fs';

export type XonFileImportProvider = FileImportProvider & Brand<'Analyzer.XonFileImportProvider'>;

export const $XonFileImportProvider = () =>
  $AnalyzerType<XonFileImportProvider>('XonFileImportProvider', $ImportProvider());

export function newXonFileImportProvider(): XonFileImportProvider {
  return {
    $: $XonFileImportProvider(),

    canProvide(uri: Uri): Boolean2 {
      return uri.value.lowerCase().endsWith(newText('.xon'));
    },

    provideDeclarationScope(uri: Uri): DeclarationScope {
      return getDeclarationsFromUri(uri);
    },
  };
}

function getDeclarationsFromUri(uri: Uri): DeclarationScope {
  // todo use async version of 'readFileSync'
  const buffer = readFileSync(uri.value.toNativeString());
  const text = newText(buffer.toString());
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const {statements} = parseStatements(context);
  const semanticContext = newSemanticContext(uri.value);
  const declarationsScope = newDeclarationScope();

  for (const statement of statements) {
    statement.semantify && statement.semantify(semanticContext);

    if (is(statement, $DeclarationStatementNode()) && is(statement.semantic, $DeclarationSemantic())) {
      declarationsScope.add(statement.semantic);
    }
  }

  return declarationsScope;
}
