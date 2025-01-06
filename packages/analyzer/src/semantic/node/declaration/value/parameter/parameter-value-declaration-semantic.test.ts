import {
  $AttributeValueDeclarationSemantic,
  AttributeValueDeclarationSemantic,
  FunctionTypeSemantic,
  ParameterValueDeclarationSemantic,
  semanticFromResource,
  TEST_SEMANTIC_CONFIG,
} from '#analyzer';
import {newText, newTextResource, nothing} from '#common';
import {expect, test} from 'vitest';

test('only a', () => {
  const text = newText('const a(p: Integer): String');
  const source = newTextResource(nothing, text);
  const semantic = semanticFromResource(source, TEST_SEMANTIC_CONFIG);

  expect(semantic.declarationManager.count()).toBe(1);

  const declaration = semantic.declarationManager.declarations
    .get(newText('a'))
    ?.at2(0) as AttributeValueDeclarationSemantic;
  expect(declaration.$).toBe($AttributeValueDeclarationSemantic);
  expect(declaration.modifier?.toNativeString()).toBe('const');
  expect(declaration.name.toNativeString()).toBe('a');

  const type = declaration.type as FunctionTypeSemantic;
  const parameters = type.parameters;
  expect(parameters.count()).toBe(1);

  const param = parameters.at(0) as ParameterValueDeclarationSemantic;
  expect(param.name.toNativeString()).toBe('p');
  expect(param.type.declaration?.name.toNativeString()).toBe('Integer');

  expect(type.result.declaration?.name.toNativeString()).toBe('String');
});
