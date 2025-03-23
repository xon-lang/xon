import {
  $AttributeDeclarationSemantic,
  $IdTypeSemantic,
  AttributeDeclarationSemantic,
  createSemanticAnalyzer,
  DeclarationNode,
  IdNode,
  syntaxFromResource,
} from '#analyzer';
import {newText, newTextResource, nothing} from '#common';
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
    $AttributeDeclarationSemantic().toNativeString(),
  );
  expect(semantic.declarationManager.declarations.get(newText('a'))?.at2(0).name.toNativeString()).toBe('a');

  const constNode = syntax.statements.at(1)?.value as DeclarationNode;
  expect(constNode.id?.text.toNativeString()).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($AttributeDeclarationSemantic());

  const idSemantic = constNode.id?.semantic as AttributeDeclarationSemantic;
  expect(idSemantic.name.toNativeString()).toBe('a');
  expect((constNode.annotation?.value as IdNode)?.text.toNativeString()).toBe('Integer');
  expect((constNode.annotation?.value as IdNode)?.semantic?.$.toNativeString()).toBe(
    $IdTypeSemantic().toNativeString(),
  );

  // const typeSemantic = (constNode.type?.value as IdNode)?.semantic as IdTypeSemantic;
  // expect(typeSemantic.declaration?.$).toBe($NominalTypeDeclarationSemantic());
});
