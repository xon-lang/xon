import {$Node} from '../../../../../../$';
import {nothing} from '../../../../../../../lib/types';
import {textResourceFrom} from '../../../../../../util/resource/text/text-resource';
import {DeclarationNode} from '../../../../../syntax/node/declaration/declaration-node';
import {syntaxFromResource} from '../../../../../syntax/syntax-analyzer';
import {createSemanticAnalyzer} from '../../../../semantic-analyzer';
import {TEST_SEMANTIC_CONFIG} from '../../../../semantic-analyzer-config';
import {DeclarationSemantic} from '../../../declaration/declaration-semantic';
import {IntegerTypeSemantic} from '../../integer/integer-type-semantic';
import {typeSemanticParse} from '../../type-semantic-parser';
import {RangeTypeSemantic} from './range-type-semantic';

test('a is range', () => {
  const text = `
    const a: 1..3
  `;
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax, TEST_SEMANTIC_CONFIG);

  expect(semantic.declarationManager.count()).toBe(1);
  expect(semantic.declarationManager.declarations['a'][0].$).toBe($Node.DeclarationSemantic);
  expect(semantic.declarationManager.declarations['a'][0].name).toBe('a');

  const constNode = syntax.statements[0].value as DeclarationNode;
  expect(constNode.id?.text).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($Node.DeclarationSemantic);

  const idSemantic = constNode.id?.semantic as DeclarationSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = typeSemanticParse(semantic, constNode.type?.value) as RangeTypeSemantic;
  expect(typeSemantic.$).toBe($Node.RangeTypeSemantic);
  expect((typeSemantic.from as IntegerTypeSemantic).value).toBe(1);
  expect((typeSemantic.to as IntegerTypeSemantic).value).toBe(3);
});
