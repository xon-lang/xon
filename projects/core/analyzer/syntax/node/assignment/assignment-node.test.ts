import {$} from '../../../../$';
import {nothing} from '../../../../../lib/types';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {IntegerNode} from '../../../lexical/node/integer/integer-node';
import {syntaxFromResource} from '../../syntax-analyzer';
import {AssignmentNode} from './assignment-node';

test('a = 1', () => {
  const text = 'a= 1';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as AssignmentNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.AssignmentNode);
  expect(node.id.text).toBe('a');
  expect(node.assign.operator.text).toBe('=');
  expect((node.assign.value as IntegerNode).value).toBe(1);
});
