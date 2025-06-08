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
import {newArrayData, newText, Text} from '#common';
import {$Model, is} from '#typing';
import {expect, test} from 'vitest';

test('Import statement with errors', () => {
  const text = newText('import 7 17 37');
  const node = getImportStatementNode(text);

  expect(node.errorNodes?.count()).toBe(3);
});

test('Import statement without errors', () => {
  const text = newText('import "@xon/core"');
  const node = getImportStatementNode(text);

  expect(node.errorNodes?.count()).toBe(0);
  expect(is(node.expression, $StringNode())).toBe(true);
  expect((node.expression as StringNode).content?.text.toNativeString()).toBe('@xon/core');
});

test('Import statement with body', () => {
  const text = newText(`import "abc"
  
  width
  height`);
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const {statements} = parseStatements(context);

  expect(statements.count()).toBe(1);
  expect(is(statements.first(), $ImportStatementNode())).toBe(true);

  const node = statements.first() as ImportStatementNode;

  expect(node.errorNodes?.count()).toBe(0);
  expect(is(node.expression, $StringNode())).toBe(true);
  expect((node.expression as StringNode).content?.text.toNativeString()).toBe('abc');
  expect(node.body?.children.count()).toBe(2);
});

function getImportStatementNode(text: Text): ImportStatementNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData($Model(), nonHiddenNodeGenerator(context));
  const node = parseImportStatementNode(context, 0, nodes) as ImportStatementNode;

  expect(node).toBeTruthy();
  expect(is(node, $ImportStatementNode())).toBe(true);

  return node;
}
