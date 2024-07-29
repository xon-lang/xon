import {$} from '../../../../../../$';
import {nothing} from '../../../../../../../lib/types';
import {textResourceFromData} from '../../../../../../util/resource/text/text-resource';
import {semanticFromResource} from '../../../../semantic-analyzer';
import {TEST_SEMANTIC_CONFIG} from '../../../../semantic-analyzer-config';
import {IdTypeSemantic} from '../../../type/id/id-type-semantic';
import {PropertyValueDeclarationSemantic} from '../property/property-value-declaration-semantic';
import {MethodValueDeclarationSemantic} from './method-value-declaration-semantic';

test('only a', () => {
  const text = 'infix + (a: Integer, b: String): String ';
  const source = textResourceFromData(nothing, text);
  const semantic = semanticFromResource(source, nothing, TEST_SEMANTIC_CONFIG);

  expect(semantic.declarationManager.count()).toBe(1);

  const declaration = semantic.declarationManager.declarations['+'][0] as MethodValueDeclarationSemantic;
  expect(declaration.$).toBe($.MethodValueDeclarationSemantic);
  expect(declaration.modifier).toBe('infix');
  expect(declaration.name).toBe('+');
  expect(declaration.alternativeName).toBe('__plus__');

  const parameters = declaration.parameters;
  expect(parameters.length).toBe(2);

  const aParam = parameters[0] as PropertyValueDeclarationSemantic & {type: IdTypeSemantic};
  expect(aParam.name).toBe('a');
  expect(aParam.type.declaration?.name).toBe('Integer');

  const bParam = parameters[1] as PropertyValueDeclarationSemantic & {type: IdTypeSemantic};
  expect(bParam.name).toBe('b');
  expect(bParam.type.declaration?.name).toBe('String');

  const type = declaration.type as IdTypeSemantic;
  expect(type.declaration?.name).toBe('String');
});
