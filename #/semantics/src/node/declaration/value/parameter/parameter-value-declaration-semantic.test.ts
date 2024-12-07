import {newTextData, newTextResource, nothing} from '#common';
import {
  AttributeValueDeclarationSemantic,
  FunctionTypeSemantic,
  ParameterValueDeclarationSemantic,
  semanticFromResource,
  TEST_SEMANTIC_CONFIG,
} from '#semantics';
import {$} from '#typing';

test('only a', () => {
  const text = newTextData('const a(p: Integer): String');
  const source = newTextResource(nothing, text);
  const semantic = semanticFromResource(source, nothing, TEST_SEMANTIC_CONFIG);

  expect(semantic.declarationManager.count()).toBe(1);

  const declaration = semantic.declarationManager.declarations
    .get(newTextData('a'))
    ?.at2(0) as AttributeValueDeclarationSemantic;
  expect(declaration.$).toBe($.AttributeValueDeclarationSemantic);
  expect(declaration.modifier).toBe('const');
  expect(declaration.name).toBe('a');

  const type = declaration.type as FunctionTypeSemantic;
  const parameters = type.parameters;
  expect(parameters.length).toBe(1);

  const param = parameters[0] as ParameterValueDeclarationSemantic;
  expect(param.name).toBe('p');
  expect(param.type.declaration?.name).toBe('Integer');

  expect(type.result.declaration?.name).toBe('String');
});
