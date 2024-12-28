import {newText, newTextResource, nothing} from '#common';
import {
  $AttributeValueDeclarationSemantic,
  $FunctionTypeSemantic,
  $IdTypeSemantic,
  $NominalTypeDeclarationSemantic,
  $ParameterTypeDeclarationSemantic,
  AttributeValueDeclarationSemantic,
  FunctionTypeSemantic,
  IdTypeSemantic,
  ParameterTypeDeclarationSemantic,
  ParameterValueDeclarationSemantic,
  semanticFromResource,
} from '#core';

test('only a', () => {
  const text = newText(`
type Number
const a<:T:Number, V:T:>(p: T): V
  `);
  const source = newTextResource(nothing, text);
  const semantic = semanticFromResource(source, nothing);

  expect(semantic.declarationManager.count()).toBe(2);

  const declaration = semantic.declarationManager.declarations
    .get(newText('a'))
    ?.at2(0) as AttributeValueDeclarationSemantic;
  expect(declaration.$).toBe($AttributeValueDeclarationSemantic);
  expect(declaration.modifier).toBe('const');
  expect(declaration.name).toBe('a');

  const type = declaration.type as FunctionTypeSemantic;
  const generics = type.parameters;
  expect(generics.length).toBe(2);

  const genericT = generics[0] as ParameterTypeDeclarationSemantic;
  expect(genericT.name).toBe('T');

  const genericV = generics[1] as ParameterTypeDeclarationSemantic;
  expect(genericV.name).toBe('V');
  // expect(genericV.type.$).toBe($IdTypeSemantic);
  // expect((genericV.type as IdTypeSemantic).name).toBe('T');

  const resultType = type.result as FunctionTypeSemantic;
  expect(type.result.$).toBe($FunctionTypeSemantic);

  const parameters = resultType.parameters;
  expect(parameters.length).toBe(1);

  const param = parameters[0] as ParameterValueDeclarationSemantic;
  expect(param.name).toBe('p');
  expect(param.type.declaration?.name).toBe('T');
  expect(param.type.declaration?.$).toBe($ParameterTypeDeclarationSemantic);
  expect(param.type.declaration?.type.$).toBe($IdTypeSemantic);
  expect((param.type.declaration?.type as IdTypeSemantic).declaration?.$).toBe(
    $NominalTypeDeclarationSemantic,
  );
  expect((param.type.declaration?.type as IdTypeSemantic).declaration?.name).toBe('Number');

  expect(resultType.result.declaration?.name).toBe('V');
});
