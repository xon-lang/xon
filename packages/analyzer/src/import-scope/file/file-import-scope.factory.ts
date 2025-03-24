import {
  $DeclarationSemantic,
  $DeclarationStatementNode,
  $FileImportScope,
  DeclarationSemantic,
  FileImportScope,
  newAnalyzerContext,
  newCharacterStreamFromText,
  newSemanticContext,
  parseStatements,
} from '#analyzer';
import {ArrayData, Dictionary, newArrayData, newDictionary, newText, Nothing, Text} from '#common';
import {is} from '#typing';
import {readFileSync} from 'node:fs';

export function newFileImportScope(location: Text): FileImportScope {
  return {
    $: $FileImportScope(),
    location,
    _declarations: getDeclarations(location),

    get(name: Text): DeclarationSemantic | Nothing {
      return this._declarations?.get(name)?.first();
    },
  };
}

function getDeclarations(filePath: Text): Dictionary<Text, ArrayData<DeclarationSemantic>> {
  // todo use async version of 'readFileSync'
  const buffer = readFileSync(filePath.toNativeString());
  const text = newText(buffer.toString());
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const {statements} = parseStatements(context);
  const semanticContext = newSemanticContext(filePath);
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
