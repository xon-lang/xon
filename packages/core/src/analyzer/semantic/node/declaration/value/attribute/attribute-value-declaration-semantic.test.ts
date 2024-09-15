import {$} from '../../../../../../$';
import {nothing} from '../../../../../../../../lib/src/types';
import {textResourceFromData} from '../../../../../../util/resource/text/text-resource';
import {semanticFromResource} from '../../../../semantic-analyzer';
import {TEST_SEMANTIC_CONFIG} from '../../../../semantic-analyzer-config';
import {FunctionTypeSemantic} from '../../../type/function/function-type-semantic';
import {IdTypeSemantic} from '../../../type/id/id-type-semantic';
import {ParameterValueDeclarationSemantic} from '../parameter/parameter-value-declaration-semantic';
import {AttributeValueDeclarationSemantic} from './attribute-value-declaration-semantic';

test('only a', () => {
  const text = 'infix + (a: Integer, b: String): String ';
  const source = textResourceFromData(nothing, text);
  const semantic = semanticFromResource(source, nothing, TEST_SEMANTIC_CONFIG);

  expect(semantic.declarationManager.count()).toBe(1);

  const declaration = semantic.declarationManager.declarations['+'][0] as AttributeValueDeclarationSemantic;
  expect(declaration.$).toBe($.AttributeValueDeclarationSemantic);
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
