import {newText, newTextResource, nothing} from '#common';
import {
  FunctionTypeSemantic,
  IdTypeSemantic,
  semanticFromResource,
  StructuralTypeDeclarationSemantic,
  UnionTypeSemantic,
} from '#core';
import {$} from '#typing';

test('no generics', () => {
  const text = newText(`type Number = 3 | 7`);
  const source = newTextResource(nothing, text);
  const semantic = semanticFromResource(source, nothing);

  expect(semantic.declarationManager.count()).toBe(1);

  const declaration = semantic.declarationManager.declarations
    .get(newText('Number'))
    ?.at2(0) as StructuralTypeDeclarationSemantic;
  expect(declaration.$).toBe($.StructuralTypeDeclarationSemantic);
  expect(declaration.modifier).toBe('type');
  expect(declaration.name).toBe('Number');

  const type = declaration.type as UnionTypeSemantic;
  expect(type.$).toBe($.UnionTypeSemantic);
  expect(type.left.$).toBe($.IntegerTypeSemantic);
  expect(type.right.$).toBe($.IntegerTypeSemantic);
});

test('has generics', () => {
  const text = newText(`type Number<:T, V,U:> = T | V | U`);
  const source = newTextResource(nothing, text);
  const semantic = semanticFromResource(source, nothing);

  expect(semantic.declarationManager.count()).toBe(1);

  const declaration = semantic.declarationManager.declarations
    .get(newText('Number'))
    ?.at2(0) as StructuralTypeDeclarationSemantic;
  expect(declaration.$).toBe($.StructuralTypeDeclarationSemantic);
  expect(declaration.modifier).toBe('type');
  expect(declaration.name).toBe('Number');

  const type = declaration.type as FunctionTypeSemantic;
  expect(type.$).toBe($.FunctionTypeSemantic);
  expect(type.parameters.length).toBe(3);
  expect(type.parameters[2].name).toBe('U');

  const resultType = type.result as UnionTypeSemantic;
  expect(resultType.$).toBe($.UnionTypeSemantic);
  expect(resultType.left.$).toBe($.UnionTypeSemantic);
  expect(resultType.right.$).toBe($.IdTypeSemantic);
  expect((resultType.right as IdTypeSemantic).name).toBe('U');
});
