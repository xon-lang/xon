import {
  $AnalyzerType,
  $DeclarationSemantic,
  $DeclarationStatementNode,
  $ImportProvider,
  DeclarationScope,
  DeclarationSemantic,
  FileImportProvider,
  newAnalyzerContext,
  newCharacterStreamFromText,
  newDeclarationScope,
  newSemanticContext,
  parseStatements,
} from '#analyzer';
import {ArrayData, Boolean2, Dictionary, newArrayData, newDictionary, newText, Text, Uri} from '#common';
import {Brand, is} from '#typing';
import {readFileSync} from 'node:fs';

export type XonFileImportProvider = FileImportProvider & Brand<'Analyzer.XonFileImportProvider'>;

export const $XonFileImportProvider = () =>
  $AnalyzerType<XonFileImportProvider>('XonFileImportProvider', $ImportProvider());

export function newXonFileImportProvider(): XonFileImportProvider {
  return {
    $: $XonFileImportProvider(),

    canProvide(uri: Uri): Boolean2 {
      return uri.value.endsWith(newText('.xon'));
    },

    provideDeclarationScope(uri: Uri): DeclarationScope {
      const declarations = getDeclarationsFromUri(uri);

      return newDeclarationScope(declarations);
    },
  };
}

function getDeclarationsFromUri(uri: Uri): Dictionary<Text, ArrayData<DeclarationSemantic>> {
  // todo use async version of 'readFileSync'
  const buffer = readFileSync(uri.value.toNativeString());
  const text = newText(buffer.toString());
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const {statements} = parseStatements(context);
  const semanticContext = newSemanticContext(uri.value);
  const declarations = newDictionary<Text, ArrayData<DeclarationSemantic>>();

  for (const statement of statements) {
    statement.semantify && statement.semantify(semanticContext);

    if (is(statement, $DeclarationStatementNode()) && is(statement.semantic, $DeclarationSemantic())) {
      const overloads = declarations.get(statement.semantic.name);

      if (overloads) {
        overloads.addFirstItem(statement.semantic);
      } else {
        declarations.set(statement.semantic.name, newArrayData([statement.semantic]));
      }
    }
  }

  return declarations;
}
