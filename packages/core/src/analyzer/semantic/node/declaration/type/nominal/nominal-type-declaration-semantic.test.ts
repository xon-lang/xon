import {newText, newTextResource, nothing} from '#common';
import {
  $FunctionTypeSemantic,
  $IdTypeSemantic,
  $NominalTypeDeclarationSemantic,
  FunctionTypeSemantic,
  IdTypeSemantic,
  NominalTypeDeclarationSemantic,
  semanticFromResource,
} from '#core';
import {expect, test} from 'vitest';

test('no generics', () => {
  const text = newText(`type Number`);
  const source = newTextResource(nothing, text);
  const semantic = semanticFromResource(source, nothing);

  expect(semantic.declarationManager.count()).toBe(1);

  const declaration = semantic.declarationManager.declarations
    .get(newText('Number'))
    ?.at2(0) as NominalTypeDeclarationSemantic;
  expect(declaration.$.toNativeString()).toBe($NominalTypeDeclarationSemantic.toNativeString());
  expect(declaration.modifier?.toNativeString()).toBe('type');
  expect(declaration.name.toNativeString()).toBe('Number');

  const type = declaration.type as IdTypeSemantic;
  expect(type.$).toBe($IdTypeSemantic);
  expect(type.name.toNativeString()).toBe('Number');
});

test('has generics', () => {
  const text = newText(`type Number<:T, V,U:>`);
  const source = newTextResource(nothing, text);
  const semantic = semanticFromResource(source, nothing);

  expect(semantic.declarationManager.count()).toBe(1);

  const declaration = semantic.declarationManager.declarations
    .get(newText('Number'))
    ?.at2(0) as NominalTypeDeclarationSemantic;
  expect(declaration.$).toBe($NominalTypeDeclarationSemantic);
  expect(declaration.modifier?.toNativeString()).toBe('type');
  expect(declaration.name.toNativeString()).toBe('Number');

  const type = declaration.type as FunctionTypeSemantic;
  expect(type.$).toBe($FunctionTypeSemantic);
  expect(type.parameters.count()).toBe(3);
  expect(type.parameters.at(2)?.name.toNativeString()).toBe('U');
  expect(type.result.declaration?.name.toNativeString()).toBe('Number');
});
