import {
  $DeclarationNode,
  $DeclarationSemantic,
  $FileImportScope,
  DeclarationSemantic,
  ImportScope,
  newAnalyzerContext,
  newCharacterStreamFromText,
  newSemanticContext,
  parseStatements,
} from '#analyzer';
import {ArrayData, newArrayData, newDictionary, newText, Nothing, Text} from '#common';
import {is} from '#typing';
import {readFileSync} from 'node:fs';

export function newFileImportScope(filePath: Text): ImportScope {
  // todo use async version of 'readFileSync'
  const buffer = readFileSync(filePath.toNativeString());
  const text = newText(buffer.toString());
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const {statements} = parseStatements(context);
  const semanticContext = newSemanticContext(filePath);
  const _declarations = newDictionary<Text, ArrayData<DeclarationSemantic>>();

  for (const statement of statements) {
    statement.semantify && statement.semantify(semanticContext);

    if (is(statement, $DeclarationNode()) && is(statement.semantic, $DeclarationSemantic())) {
      const overloads = _declarations.get(statement.semantic.name);

      if (overloads) {
        overloads.addFirstItem(statement.semantic);
      } else {
        _declarations.set(statement.semantic.name, newArrayData([statement.semantic]));
      }
    }
  }

  return {
    $: $FileImportScope(),
    _declarations,

    get(name: Text): DeclarationSemantic | Nothing {
      return this._declarations?.get(name)?.first();
    },
  };
}
