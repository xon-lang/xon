import {
  $ImportStatementNode,
  $StatementNode,
  $StringContentNode,
  $StringNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseStatements,
  StatementNode,
  StringContentNode,
  StringNode,
} from '#analyzer';
import {ArrayData, newText, newTextPosition, Text} from '#common';
import {is} from '#typing';
import {findClosestNode, findNode, findStatementNode} from '#vscode';
import {expect, test} from 'vitest';

test('Find statement node', () => {
  const text = newText('import "abc" "def"');
  const statements = getStatementNodes(text);
  const node = findStatementNode(statements, newTextPosition(9, 1, 9));

  expect(node).toBeTruthy();
  expect(is(node, $StatementNode())).toBe(true);
});

test('Find node', () => {
  const text = newText('import "abc" "def"');
  const statements = getStatementNodes(text);
  const node = findNode(statements, newTextPosition(9, 0, 9));

  expect(node).toBeTruthy();
  expect(is(node, $StringContentNode())).toBe(true);
  expect((node as StringContentNode).text.toNativeString()).toBe('abc');
});

test('Find closest node', () => {
  const text = newText('import "abc" "def"');
  const statements = getStatementNodes(text);
  const atPositionNode = findNode(statements, newTextPosition(9, 0, 9));

  expect(atPositionNode).toBeTruthy();

  const node = findClosestNode((node) => is(node, $StringNode()), atPositionNode!);
  expect(node).toBeTruthy();
  expect(is(node, $StringNode())).toBe(true);
  expect(node!.content?.text.toNativeString()).toBe('abc');
});

test('Find closest node2', () => {
  const text = newText('import ""');

  const statements = getStatementNodes(text);
  const atPositionNode = findNode(statements, newTextPosition(8, 0, 8));

  expect(atPositionNode).toBeTruthy();

  const node = findClosestNode(
    (node): node is StringNode =>
      is(node, $StringNode()) && is(node.parent, $ImportStatementNode()) && node === node.parent.expression,
    atPositionNode!,
  );

  expect(node).toBeTruthy();
  expect(is(node, $StringNode())).toBe(true);
  expect(node!.content).toBeFalsy();
});

function getStatementNodes(text: Text): ArrayData<StatementNode> {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const {statements} = parseStatements(context);

  expect(statements.count() > 0).toBe(true);

  return statements;
}
