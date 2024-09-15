import {$} from '../../../../../../$';
import {nothing} from '../../../../../../../../lib/types';
import {textResourceFromData} from '../../../../../../util/resource/text/text-resource';
import {semanticFromResource} from '../../../../semantic-analyzer';
import {FunctionTypeSemantic} from '../../../type/function/function-type-semantic';
import {IdTypeSemantic} from '../../../type/id/id-type-semantic';
import {UnionTypeSemantic} from '../../../type/set/union/union-type-semantic';
import {StructuralTypeDeclarationSemantic} from './structural-type-declaration-semantic';

test('no generics', () => {
  const text = `type Number = 3 | 7`;
  const source = textResourceFromData(nothing, text);
  const semantic = semanticFromResource(source, nothing);

  expect(semantic.declarationManager.count()).toBe(1);

  const declaration = semantic.declarationManager.declarations[
    'Number'
  ][0] as StructuralTypeDeclarationSemantic;
  expect(declaration.$).toBe($.StructuralTypeDeclarationSemantic);
  expect(declaration.modifier).toBe('type');
  expect(declaration.name).toBe('Number');

  const type = declaration.type as UnionTypeSemantic;
  expect(type.$).toBe($.UnionTypeSemantic);
  expect(type.left.$).toBe($.IntegerTypeSemantic);
  expect(type.right.$).toBe($.IntegerTypeSemantic);
});

test('has generics', () => {
  const text = `type Number<:T, V,U:> = T | V | U`;
  const source = textResourceFromData(nothing, text);
  const semantic = semanticFromResource(source, nothing);

  expect(semantic.declarationManager.count()).toBe(1);

  const declaration = semantic.declarationManager.declarations[
    'Number'
  ][0] as StructuralTypeDeclarationSemantic;
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
