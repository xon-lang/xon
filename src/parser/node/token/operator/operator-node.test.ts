import {sourceFromText} from '../../../../source/source';
import {parseSyntax} from '../../../syntax';
import {$Node} from '../../node';
import {InfixNode} from '../../syntax/infix/infix-node';
import {PrefixNode} from '../../syntax/prefix/prefix-node';
import {OperatorNode} from './operator-node';

test('single operator', () => {
  const text = '!';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as OperatorNode;

  expect(statements.length).toBe(1);
  expect(node.text).toBe('!');
  expect(node.$).toBe($Node.OPERATOR);
});

test('after integer', () => {
  const text = '1!';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as PrefixNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.POSTFIX);
  expect(node.operator.text).toBe('!');
});

test('x + x', () => {
  const text = 'x is Number';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as InfixNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.INFIX);
  expect(node.operator.text).toBe('is');
});

test('comma', () => {
  const text = ',';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as OperatorNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.OPERATOR);
  expect(node.text).toBe(',');
});
