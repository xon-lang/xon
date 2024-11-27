import {newTextData, nothing, textResourceFromData} from '#/common';
import {
  AttributeValueDeclarationSemantic,
  createSemanticAnalyzer,
  DeclarationNode,
  IdNode,
  syntaxFromResource,
} from '#/core';
import {$} from '#/typing';

test('a is integer', () => {
  const text = newTextData(`
    type Integer
    const a: Integer
  `);
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  expect(semantic.declarationManager.count()).toBe(2);
  expect(semantic.declarationManager.declarations.get(newTextData('a'))?.at2(0).$).toBe(
    $.AttributeValueDeclarationSemantic,
  );
  expect(semantic.declarationManager.declarations.get(newTextData('a'))?.at2(0).name).toBe('a');

  const constNode = syntax.statements[1].value as DeclarationNode;
  expect(constNode.id?.text.toString()).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($.AttributeValueDeclarationSemantic);

  const idSemantic = constNode.id?.semantic as AttributeValueDeclarationSemantic;
  expect(idSemantic.name).toBe('a');
  expect((constNode.type?.value as IdNode)?.text.toString()).toBe('Integer');
  expect((constNode.type?.value as IdNode)?.semantic?.$).toBe($.IdTypeSemantic);

  // const typeSemantic = (constNode.type?.value as IdNode)?.semantic as IdTypeSemantic;
  // expect(typeSemantic.declaration?.$).toBe($.NominalTypeDeclarationSemantic);
});
