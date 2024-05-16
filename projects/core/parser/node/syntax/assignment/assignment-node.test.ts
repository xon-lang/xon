import {nothing} from '../../../../../lib/types';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {syntaxParse} from '../../../syntax-parser';
import {$Node} from '../../node';
import {IntegerNode} from '../../token/integer/integer-node';
import {AssignmentNode} from './assignment-node';

test('a = 1', () => {
  const text = 'a= 1';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].item as AssignmentNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.ASSIGNMENT);
  expect(node.id.text).toBe('a');
  expect(node.assign.operator.text).toBe('=');
  expect((node.assign.value as IntegerNode).value).toBe(1);
});
