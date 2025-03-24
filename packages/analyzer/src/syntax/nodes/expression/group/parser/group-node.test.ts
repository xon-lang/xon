import {
  $BraceGroupNode,
  $BraceOpenNode,
  $BracketCloseNode,
  $BracketGroupNode,
  $BracketOpenNode,
  $CommaNode,
  $IntegerNode,
  $ParenCloseNode,
  $ParenGroupNode,
  $ParenOpenNode,
  $WhitespaceNode,
  ExpressionStatementNode,
  GroupNode,
  IdNode,
  IntegerNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseGroupNode,
  WhitespaceNode,
} from '#analyzer';
import {newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Empty group', () => {
  const text = newText('()');
  const node = getGroupNode(text);

  expect(is(node, $ParenGroupNode())).toBe(true);
  expect(is(node.open, $ParenOpenNode())).toBe(true);
  expect(is(node.close, $ParenCloseNode())).toBe(true);
  expect(node.items.count()).toBe(0);
});

test('No close pair', () => {
  const text = newText('{');
  const node = getGroupNode(text);

  expect(is(node, $BraceGroupNode())).toBe(true);
  expect(is(node.open, $BraceOpenNode())).toBe(true);
  expect(node.close).toBeFalsy();
  expect(node.items.count()).toBe(0);
});

test('Single element', () => {
  const text = newText('(a)');
  const node = getGroupNode(text);

  expect(is(node, $ParenGroupNode())).toBe(true);
  expect(is(node.open, $ParenOpenNode())).toBe(true);
  expect(is(node.close, $ParenCloseNode())).toBe(true);
  expect(node.items.count()).toBe(1);
  expect(
    ((node.items.first()?.statement as ExpressionStatementNode).expression as IdNode).text.toNativeString(),
  ).toBe('a');
});

test('Many elements with no comma', () => {
  const text = newText('[123 456]');
  const node = getGroupNode(text);

  expect(is(node, $BracketGroupNode())).toBe(true);
  expect(is(node.open, $BracketOpenNode())).toBe(true);
  expect(is(node.close, $BracketCloseNode())).toBe(true);
  expect(node.items.count()).toBe(1);
  expect(
    (
      (node.items.first()?.statement as ExpressionStatementNode).expression as IntegerNode
    ).contentNode.text.toNativeString(),
  ).toBe('123');
});

test('No elements but single comma', () => {
  const text = newText('[,]');
  const node = getGroupNode(text);

  expect(is(node, $BracketGroupNode())).toBe(true);
  expect(is(node.open, $BracketOpenNode())).toBe(true);
  expect(is(node.close, $BracketCloseNode())).toBe(true);
  expect(node.items.count()).toBe(1);
  expect(node.items.first()?.statement).toBeFalsy();
  expect(node.items.first()?.comma?.text.toNativeString()).toBe(',');
});

test('Inner group', () => {
  const text = newText('[()]');
  const node = getGroupNode(text);

  expect(is(node, $BracketGroupNode())).toBe(true);
  expect(is(node.open, $BracketOpenNode())).toBe(true);
  expect(is(node.close, $BracketCloseNode())).toBe(true);
  expect(node.items.count()).toBe(1);
  expect(
    is((node.items.first()?.statement as ExpressionStatementNode).expression, $ParenGroupNode()),
  ).toBeTruthy();
  expect(
    ((node.items.first()?.statement as ExpressionStatementNode).expression as GroupNode).items.count(),
  ).toBe(0);
});

test('Two numbers', () => {
  const text = newText('[1, 2]');
  const node = getGroupNode(text);

  expect(is(node, $BracketGroupNode())).toBe(true);
  expect(is(node.open, $BracketOpenNode())).toBe(true);
  expect(is(node.close, $BracketCloseNode())).toBe(true);
  expect(node.items.count()).toBe(2);
  expect(
    is((node.items.first()?.statement as ExpressionStatementNode).expression, $IntegerNode()),
  ).toBeTruthy();
  expect(
    is((node.items.last()?.statement as ExpressionStatementNode).expression, $IntegerNode()),
  ).toBeTruthy();
});

test('Two numbers and comma at the end', () => {
  const text = newText('[1, 2,]');
  const node = getGroupNode(text);

  expect(is(node, $BracketGroupNode())).toBe(true);
  expect(is(node.open, $BracketOpenNode())).toBe(true);
  expect(is(node.close, $BracketCloseNode())).toBe(true);
  expect(node.items.count()).toBe(2);
  expect(
    is((node.items.first()?.statement as ExpressionStatementNode).expression, $IntegerNode()),
  ).toBeTruthy();
  expect(
    is((node.items.last()?.statement as ExpressionStatementNode).expression, $IntegerNode()),
  ).toBeTruthy();
  expect(is(node.items.last()?.comma, $CommaNode())).toBeTruthy();
});

test('Two numbers and comma with space at the end', () => {
  const text = newText('[1, 2, ]');
  const node = getGroupNode(text);

  expect(is(node, $BracketGroupNode())).toBe(true);
  expect(is(node.open, $BracketOpenNode())).toBe(true);
  expect(is(node.close, $BracketCloseNode())).toBe(true);
  expect(node.items.count()).toBe(2);
  expect(
    is((node.items.first()?.statement as ExpressionStatementNode).expression, $IntegerNode()),
  ).toBeTruthy();
  expect(
    is((node.items.last()?.statement as ExpressionStatementNode).expression, $IntegerNode()),
  ).toBeTruthy();
  expect(is(node.items.last()?.comma, $CommaNode())).toBeTruthy();
  expect(node.close?.hiddenNodes?.count()).toBe(1);
  expect(is(node.close?.hiddenNodes?.first(), $WhitespaceNode())).toBeTruthy();
  expect((node.close?.hiddenNodes?.first() as WhitespaceNode).text.toNativeString()).toBe(' ');
});

test('Items on several lines', () => {
  const text = newText(`[1,
    2
    3,
4,    5]`);
  const node = getGroupNode(text);

  expect(is(node, $BracketGroupNode())).toBe(true);
  expect(is(node.open, $BracketOpenNode())).toBe(true);
  expect(is(node.close, $BracketCloseNode())).toBe(true);
  expect(node.items.count()).toBe(4);
  expect(
    is((node.items.first()?.statement as ExpressionStatementNode).expression, $IntegerNode()),
  ).toBeTruthy();
  expect(
    is((node.items.last()?.statement as ExpressionStatementNode).expression, $IntegerNode()),
  ).toBeTruthy();
  expect(node.items.last()?.comma).toBeFalsy();
  expect(node.close?.hiddenNodes?.count()).toBeFalsy();
  expect(
    is((node.items.at(3)?.statement as ExpressionStatementNode).expression, $IntegerNode()),
  ).toBeTruthy();
  expect(
    (
      (node.items.at(3)?.statement as ExpressionStatementNode).expression as IntegerNode
    ).contentNode.text.toNativeString(),
  ).toBe('5');
});

test('Second empty item', () => {
  const text = newText(`[1, , 2 ]`);
  const node = getGroupNode(text);

  expect(is(node, $BracketGroupNode())).toBe(true);
  expect(is(node.open, $BracketOpenNode())).toBe(true);
  expect(is(node.close, $BracketCloseNode())).toBe(true);
  expect(node.items.count()).toBe(3);
  expect(node.items.at(1)?.statement).toBeFalsy();
  expect(node.items.at(1)?.comma).toBeTruthy();
});

function getGroupNode(text: Text): GroupNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseGroupNode(context) as GroupNode;

  return node;
}
