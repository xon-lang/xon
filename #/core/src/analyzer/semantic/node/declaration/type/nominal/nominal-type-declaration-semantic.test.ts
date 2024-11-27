import {newTextData, nothing, textResourceFromData} from '#/common';
import {
  FunctionTypeSemantic,
  IdTypeSemantic,
  NominalTypeDeclarationSemantic,
  semanticFromResource,
} from '#/core';
import {$} from '#/typing';

test('no generics', () => {
  const text = newTextData(`type Number`);
  const source = textResourceFromData(nothing, text);
  const semantic = semanticFromResource(source, nothing);

  expect(semantic.declarationManager.count()).toBe(1);

  const declaration = semantic.declarationManager.declarations
    .get(newTextData('Number'))
    ?.at2(0) as NominalTypeDeclarationSemantic;
  expect(declaration.$).toBe($.NominalTypeDeclarationSemantic);
  expect(declaration.modifier).toBe('type');
  expect(declaration.name).toBe('Number');

  const type = declaration.type as IdTypeSemantic;
  expect(type.$).toBe($.IdTypeSemantic);
  expect(type.name).toBe('Number');
});

test('has generics', () => {
  const text = newTextData(`type Number<:T, V,U:>`);
  const source = textResourceFromData(nothing, text);
  const semantic = semanticFromResource(source, nothing);

  expect(semantic.declarationManager.count()).toBe(1);

  const declaration = semantic.declarationManager.declarations
    .get(newTextData('Number'))
    ?.at2(0) as NominalTypeDeclarationSemantic;
  expect(declaration.$).toBe($.NominalTypeDeclarationSemantic);
  expect(declaration.modifier).toBe('type');
  expect(declaration.name).toBe('Number');

  const type = declaration.type as FunctionTypeSemantic;
  expect(type.$).toBe($.FunctionTypeSemantic);
  expect(type.parameters.length).toBe(3);
  expect(type.parameters[2].name).toBe('U');
  expect(type.result.declaration?.name).toBe('Number');
});
