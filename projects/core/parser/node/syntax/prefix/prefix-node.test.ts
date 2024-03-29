import {nothing} from '../../../../lib/core';
import {evaluate} from '../../../../util/evaluate';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {parseSyntax} from '../../../syntax';
import {$Node} from '../../node';
import {OperatorNode} from '../../token/operator/operator-node';
import {DeclarationNode} from '../declaration/declaration-node';
import {PrefixNode} from './prefix-node';

test('negative integer', () => {
  const text = '-1';
  const source = textResourceFrom(nothing, text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as PrefixNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.PREFIX);
  expect(node.operator.text).toBe('-');
  expect(evaluate(node)).toBe(-1);
});

test('infix modifier', () => {
  const text = 'infix';
  const source = textResourceFrom(nothing, text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as OperatorNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.OPERATOR);
  expect(node.text).toBe('infix');
});

test('model string', () => {
  const text = 'model String';
  const source = textResourceFrom(nothing, text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as DeclarationNode;

  expect(statements.length).toBe(1);
  expect(node).toBeTruthy();
  expect(node.modifier?.text).toBe('model');
});

test('model string with base class', () => {
  const text = 'model Array\nmodel String: Array';
  const source = textResourceFrom(nothing, text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[1].item as DeclarationNode;

  expect(statements.length).toBe(2);
  expect(node).toBeTruthy();

  expect(node.modifier?.$).toBe($Node.OPERATOR);
  expect(node.modifier?.text).toBe('model');
});

test('hidden nodes', () => {
  const text = '-    1\n';
  const source = textResourceFrom(nothing, text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as PrefixNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.PREFIX);
  expect(node.operator.text).toBe('-');

  expect(node.operator.hiddenNodes.length).toBe(1);
  expect(node.operator.hiddenNodes[0].$).toBe($Node.WHITESPACE);
  expect(node.operator.hiddenNodes[0].text).toBe('    ');

  expect(syntax.formatterManager.formatters.length).toBe(1);
  expect(syntax.formatterManager.formatters[0].text).toBe('');
  expect(evaluate(node)).toBe(-1);
});
