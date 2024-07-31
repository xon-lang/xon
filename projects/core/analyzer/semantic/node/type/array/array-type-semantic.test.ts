import {$} from '../../../../../$';
import {nothing} from '../../../../../../lib/types';
import {textResourceFromData} from '../../../../../util/resource/text/text-resource';
import {DeclarationNode} from '../../../../syntax/node/declaration/declaration-node';
import {syntaxFromResource} from '../../../../syntax/syntax-analyzer';
import {createSemanticAnalyzer} from '../../../semantic-analyzer';
import {TEST_SEMANTIC_CONFIG} from '../../../semantic-analyzer-config';
import {ParameterValueDeclarationSemantic} from '../../declaration/value/parameter/parameter-value-declaration-semantic';
import {IntegerTypeSemantic} from '../integer/integer-type-semantic';
import {StringTypeSemantic} from '../string/string-type-semantic';
import {typeNodeType} from '../type-semantic-parser';
import {ArrayTypeSemantic} from './array-type-semantic';

test('a is array', () => {
  const text = `
    const a: [1, 2, "A"]
  `;
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax, TEST_SEMANTIC_CONFIG);

  expect(semantic.declarationManager.count()).toBe(1);
  expect(semantic.declarationManager.declarations['a'][0].$).toBe($.ParameterValueDeclarationSemantic);
  expect(semantic.declarationManager.declarations['a'][0].name).toBe('a');

  const constNode = syntax.statements[0].value as DeclarationNode;
  expect(constNode.id?.text.toString()).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($.ParameterValueDeclarationSemantic);

  const idSemantic = constNode.id?.semantic as ParameterValueDeclarationSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = constNode.type
    ? (typeNodeType(semantic, constNode.type) as ArrayTypeSemantic)
    : nothing;
  expect(typeSemantic?.$).toBe($.ArrayTypeSemantic);
  expect(typeSemantic?.items.length).toBe(3);
  expect((typeSemantic?.items[0] as IntegerTypeSemantic).value).toBe(1);
  expect((typeSemantic?.items[1] as IntegerTypeSemantic).value).toBe(2);
  expect((typeSemantic?.items[2] as StringTypeSemantic).value).toBe('A');
});
