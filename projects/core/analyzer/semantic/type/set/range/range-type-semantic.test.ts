import {nothing} from '../../../../../../lib/types';
import {textResourceFrom} from '../../../../../util/resource/text/text-resource';
import {syntaxParse} from '../../../../syntax-analyzer';
import {DeclarationNode} from '../../../../syntax/node/declaration/declaration-node';
import {DeclarationSemantic} from '../../../declaration/declaration-semantic';
import {TEST_SEMANTIC_CONFIG} from '../../../semantic-config';
import {$Semantic, semanticParse} from '../../../semantic-node';
import {IntegerTypeSemantic} from '../../integer/integer-type-semantic';
import {typeSemanticParse} from '../../type-semantic-parser';
import {RangeTypeSemantic} from './range-type-semantic';

test('a is range', () => {
  const text = `
    const a: 1..3
  `;
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const semantic = semanticParse(syntax, TEST_SEMANTIC_CONFIG);

  expect(semantic.declarationManager.count()).toBe(1);
  expect(semantic.declarationManager.declarations['a'][0].$).toBe($Semantic.DECLARATION);
  expect(semantic.declarationManager.declarations['a'][0].name).toBe('a');

  const constNode = syntax.statements[0].value as DeclarationNode;
  expect(constNode.id?.text).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($Semantic.DECLARATION);

  const idSemantic = constNode.id?.semantic as DeclarationSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = typeSemanticParse(semantic, constNode.type?.value) as RangeTypeSemantic;
  expect(typeSemantic.$).toBe($Semantic.RANGE_TYPE);
  expect((typeSemantic.from as IntegerTypeSemantic).value).toBe(1);
  expect((typeSemantic.to as IntegerTypeSemantic).value).toBe(3);
});
