import {
  $AttributeValueDeclarationSemantic,
  AttributeValueDeclarationSemantic,
  FunctionTypeSemantic,
  IdTypeSemantic,
  ParameterValueDeclarationSemantic,
  semanticFromResource,
  TEST_SEMANTIC_CONFIG,
} from '#analyzer';
import {newText, newTextResource, nothing} from '#common';
import {expect, test} from 'vitest';

test('only a', () => {
  const text = newText('infix + (a: Integer, b: String): String ');
  const source = newTextResource(nothing, text);
  const semantic = semanticFromResource(source, TEST_SEMANTIC_CONFIG);

  expect(semantic.declarationManager.count()).toBe(1);

  const declaration = semantic.declarationManager.declarations
    .get(newText('+'))
    ?.at2(0) as AttributeValueDeclarationSemantic;
  expect(declaration.$).toBe($AttributeValueDeclarationSemantic);
  expect(declaration.modifier?.toNativeString()).toBe('infix');
  expect(declaration.name.toNativeString()).toBe('+');
  expect(declaration.alternativeName.toNativeString()).toBe('__plus__');

  const type = declaration.type as FunctionTypeSemantic;
  const parameters = type.parameters;
  expect(parameters.count()).toBe(2);

  const aParam = parameters.at(0) as ParameterValueDeclarationSemantic & {type: IdTypeSemantic};
  expect(aParam.name.toNativeString()).toBe('a');
  expect(aParam.type.declaration?.name.toNativeString()).toBe('Integer');

  const bParam = parameters.at(1) as ParameterValueDeclarationSemantic & {type: IdTypeSemantic};
  expect(bParam.name.toNativeString()).toBe('b');
  expect(bParam.type.declaration?.name.toNativeString()).toBe('String');

  expect(type.result.declaration?.name.toNativeString()).toBe('String');
});
