import {newText, newTextResource, nothing} from '#common';
import {
  $AttributeValueDeclarationSemantic,
  AttributeValueDeclarationSemantic,
  FunctionTypeSemantic,
  IdTypeSemantic,
  ParameterValueDeclarationSemantic,
  semanticFromResource,
  TEST_SEMANTIC_CONFIG,
} from '#core';
import {expect, test} from 'vitest';

test('only a', () => {
  const text = newText('infix + (a: Integer, b: String): String ');
  const source = newTextResource(nothing, text);
  const semantic = semanticFromResource(source, nothing, TEST_SEMANTIC_CONFIG);

  expect(semantic.declarationManager.count()).toBe(1);

  const declaration = semantic.declarationManager.declarations
    .get(newText('+'))
    ?.at2(0) as AttributeValueDeclarationSemantic;
  expect(declaration.$).toBe($AttributeValueDeclarationSemantic);
  expect(declaration.modifier).toBe('infix');
  expect(declaration.name).toBe('+');
  expect(declaration.alternativeName).toBe('__plus__');

  const type = declaration.type as FunctionTypeSemantic;
  const parameters = type.parameters;
  expect(parameters.length).toBe(2);

  const aParam = parameters[0] as ParameterValueDeclarationSemantic & {type: IdTypeSemantic};
  expect(aParam.name).toBe('a');
  expect(aParam.type.declaration?.name).toBe('Integer');

  const bParam = parameters[1] as ParameterValueDeclarationSemantic & {type: IdTypeSemantic};
  expect(bParam.name).toBe('b');
  expect(bParam.type.declaration?.name).toBe('String');

  expect(type.result.declaration?.name).toBe('String');
});
