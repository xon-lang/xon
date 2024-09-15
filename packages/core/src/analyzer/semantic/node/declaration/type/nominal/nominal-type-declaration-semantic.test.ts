import {nothing} from '#common';
import {
  $,
  FunctionTypeSemantic,
  IdTypeSemantic,
  NominalTypeDeclarationSemantic,
  semanticFromResource,
  textResourceFromData,
} from '#core';

test('no generics', () => {
  const text = `type Number`;
  const source = textResourceFromData(nothing, text);
  const semantic = semanticFromResource(source, nothing);

  expect(semantic.declarationManager.count()).toBe(1);

  const declaration = semantic.declarationManager.declarations['Number'][0] as NominalTypeDeclarationSemantic;
  expect(declaration.$).toBe($.NominalTypeDeclarationSemantic);
  expect(declaration.modifier).toBe('type');
  expect(declaration.name).toBe('Number');

  const type = declaration.type as IdTypeSemantic;
  expect(type.$).toBe($.IdTypeSemantic);
  expect(type.name).toBe('Number');
});

test('has generics', () => {
  const text = `type Number<:T, V,U:>`;
  const source = textResourceFromData(nothing, text);
  const semantic = semanticFromResource(source, nothing);

  expect(semantic.declarationManager.count()).toBe(1);

  const declaration = semantic.declarationManager.declarations['Number'][0] as NominalTypeDeclarationSemantic;
  expect(declaration.$).toBe($.NominalTypeDeclarationSemantic);
  expect(declaration.modifier).toBe('type');
  expect(declaration.name).toBe('Number');

  const type = declaration.type as FunctionTypeSemantic;
  expect(type.$).toBe($.FunctionTypeSemantic);
  expect(type.parameters.length).toBe(3);
  expect(type.parameters[2].name).toBe('U');
  expect(type.result.declaration?.name).toBe('Number');
});
