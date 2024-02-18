import { parseSyntax } from '../../syntax';
import { IdNode } from '../id/id-node';
import { InfixNode } from '../infix/infix-node';
import { $Node } from '../node';
import { OperatorNode } from '../operator/operator-node';
import { JoiningNode } from './joining-node';

test('no space', () => {
  const text = 'abc\\.def';
  const nodes = parseSyntax(text).statements.map((x) => x.item);
  const member = nodes[0] as InfixNode;

  expect(nodes.length).toBe(1);
  expect(member.left?.$).toBe($Node.ID);
  expect((member.left as IdNode).text).toBe('abc');
  expect((member.operator as OperatorNode).text).toBe('.');
  expect(member.right?.$).toBe($Node.ID);
  expect((member.right as IdNode).text).toBe('def');
});

test('spaces', () => {
  const text = 'abc\\  .def';
  const nodes = parseSyntax(text).statements.map((x) => x.item);
  const member = nodes[0] as InfixNode;

  expect(nodes.length).toBe(1);
  expect(member.left?.$).toBe($Node.ID);
  expect((member.left as IdNode).text).toBe('abc');
  expect((member.operator as OperatorNode).text).toBe('.');
  expect(member.right?.$).toBe($Node.ID);
  expect((member.right as IdNode).text).toBe('def');
});

test('with new line', () => {
  const text = 'abc\\   \n  .def';
  const context = parseSyntax(text);
  const nodes = context.statements.map((x) => x.item);
  const member = nodes[0] as InfixNode;
  const hidden = context.hidden[0] as JoiningNode;

  expect(nodes.length).toBe(1);
  expect(hidden.text).toBe('\\   \n');
  expect(member.left?.$).toBe($Node.ID);
  expect((member.left as IdNode).text).toBe('abc');
  expect((member.operator as OperatorNode).text).toBe('.');
  expect(member.right?.$).toBe($Node.ID);
  expect((member.right as IdNode).text).toBe('def');
});
