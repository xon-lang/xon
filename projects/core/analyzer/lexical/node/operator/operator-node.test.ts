import {nothing} from '../../../../../lib/types';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {$Node} from '../../../node';
import {InfixNode} from '../../../syntax/node/infix/infix-node';
import {PostfixNode} from '../../../syntax/node/postfix/postfix-node';
import {syntaxFromResource} from '../../../syntax/syntax-analyzer';
import {OperatorNode} from './operator-node';

test('single operator', () => {
  const text = '!';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as OperatorNode;

  expect(statements.length).toBe(1);
  expect(node.text).toBe('!');
  expect(node.$).toBe($Node.OPERATOR);
});

test('after integer', () => {
  const text = '1!';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as PostfixNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.POSTFIX);
  expect(node.operator.text).toBe('!');
});

test('x + x', () => {
  const text = 'x is Number';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as InfixNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.INFIX);
  expect(node.operator.text).toBe('is');
});
