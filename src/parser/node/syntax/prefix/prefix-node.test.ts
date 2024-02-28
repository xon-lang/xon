import { evaluate } from '../../../../util/evaluate';
import { parseSyntax } from '../../../syntax';
import { $Node } from '../../node';
import { OperatorNode } from '../../token/operator/operator-node';
import { DeclarationNode } from '../declaration/declaration-node';
import { PrefixNode } from './prefix-node';

test('negative integer', () => {
  const text = '-1';
  const nodes = parseSyntax(text).statements.map((x) => x.item);
  const node = nodes[0] as PrefixNode;

  expect(node.$).toBe($Node.PREFIX);
  expect(node.operator.text).toBe('-');
  expect(evaluate(node)).toBe(-1);
});

test('infix modifier', () => {
  const text = 'infix';
  const ast = parseSyntax(text);
  const nodes = ast.statements.map((x) => x.item);
  const node = nodes[0] as OperatorNode;

  expect(nodes.length).toBe(1);
  expect(node.$).toBe($Node.OPERATOR);
  expect(node.text).toBe('infix');
});

test('model string', () => {
  const text = 'model String';
  const ast = parseSyntax(text);
  const nodes = ast.statements.map((x) => x.item);
  // const types = ast.declarations;
  const node = nodes[0] as DeclarationNode;

  expect(nodes.length).toBe(1);
  expect(node.$).toBe($Node.DECLARATION);
  expect(node.modifier?.text).toBe('model');

  // expect(types.length).toBe(1);
  // expect(types[0].name).toBe('String');
});

test('model string with base class', () => {
  const text = 'model Array\nmodel String: Array';
  const ast = parseSyntax(text);
  const nodes = ast.statements.map((x) => x.item);
  // const types = ast.declarations;
  const node = nodes[1] as DeclarationNode;

  expect(nodes.length).toBe(2);
  expect(node.$).toBe($Node.DECLARATION);
  expect(node.type?.operator.text).toBe(':');

  expect(node.modifier?.$).toBe($Node.OPERATOR);
  expect(node.modifier?.text).toBe('model');

  // expect(types.length).toBe(2);
  // expect(types[0].name).toBe('Array');
  // expect(types[1].name).toBe('String');
  // expect(types[1].restriction?.declaration?.name).toBe('Array');
});

test('hidden nodes', () => {
  const text = '-    1';
  const syntax = parseSyntax(text);
  const nodes = syntax.statements.map((x) => x.item);
  const node = nodes[0] as PrefixNode;

  expect(node.$).toBe($Node.PREFIX);
  expect(node.operator.text).toBe('-');

  expect(node.operator.hiddenNodes.length).toBe(1);
  expect(node.operator.hiddenNodes[0].$).toBe($Node.WHITESPACE);
  expect(node.operator.hiddenNodes[0].text).toBe('    ');

  expect(syntax.formatters.length).toBe(1);
  expect(syntax.formatters[0].text).toBe('');
  expect(evaluate(node)).toBe(-1);
});
