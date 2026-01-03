import {
  $ImportStatementNode,
  $StringNode,
  ImportStatementNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
  parseImportStatementNode,
  parseStatements,
  StringNode,
} from '#analyzer';
import {$Model, Integer, is, newArrayData, newText, Text} from '#core';
import {expect, test} from 'vitest';

test('Import statement with errors', () => {
  const text = newText('import 7 17 37');
  const node = getImportStatementNode(text, 3);
});

test('Import statement without errors', () => {
  const text = newText('import "@xon/core"');
  const node = getImportStatementNode(text, 0);

  expect(is(node.expression, $StringNode())).toBe(true);
  expect((node.expression as StringNode).content?.getText().toNativeString()).toBe('@xon/core');
});

test('Import statement with body', () => {
  const text = newText(`import "abc"
  
  width
  height`);
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const {statements} = parseStatements(context);

  expect(context.extraNodes.count()).toBe(0);
  expect(statements.count()).toBe(1);
  expect(is(statements.first(), $ImportStatementNode())).toBe(true);

  const node = statements.first() as ImportStatementNode;

  expect(is(node.expression, $StringNode())).toBe(true);
  expect((node.expression as StringNode).content?.getText().toNativeString()).toBe('abc');
  expect(node.body?.children?.count()).toBe(2);
});

function getImportStatementNode(text: Text, extraNodesCount: Integer): ImportStatementNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData($Model(), nonHiddenNodeGenerator(context));
  const node = parseImportStatementNode(context, nodes) as ImportStatementNode;

  expect(node).toBeTruthy();
  expect(is(node, $ImportStatementNode())).toBe(true);
  expect(context.extraNodes.count()).toBe(extraNodesCount);

  return node;
}
