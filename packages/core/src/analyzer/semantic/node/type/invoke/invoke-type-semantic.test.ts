import {newText, newTextResource, nothing} from '#common';
import {
  $AttributeValueDeclarationSemantic,
  $IdTypeSemantic,
  AttributeValueDeclarationSemantic,
  createSemanticAnalyzer,
  DeclarationNode,
  IdNode,
  syntaxFromResource,
} from '#core';
import {expect, test} from 'vitest';

test('a is integer', () => {
  const text = newText(`
    type Integer
    const a: Integer
  `);
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  expect(semantic.declarationManager.count()).toBe(2);
  expect(semantic.declarationManager.declarations.get(newText('a'))?.at2(0).$.toNativeString()).toBe(
    $AttributeValueDeclarationSemantic.toNativeString(),
  );
  expect(semantic.declarationManager.declarations.get(newText('a'))?.at2(0).name.toNativeString()).toBe('a');

  const constNode = syntax.statements[1].value as DeclarationNode;
  expect(constNode.id?.text.toNativeString()).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($AttributeValueDeclarationSemantic);

  const idSemantic = constNode.id?.semantic as AttributeValueDeclarationSemantic;
  expect(idSemantic.name.toNativeString()).toBe('a');
  expect((constNode.type?.value as IdNode)?.text.toNativeString()).toBe('Integer');
  expect((constNode.type?.value as IdNode)?.semantic?.$.toNativeString()).toBe(
    $IdTypeSemantic.toNativeString(),
  );

  // const typeSemantic = (constNode.type?.value as IdNode)?.semantic as IdTypeSemantic;
  // expect(typeSemantic.declaration?.$).toBe($NominalTypeDeclarationSemantic);
});
