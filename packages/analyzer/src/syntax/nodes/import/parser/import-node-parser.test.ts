import {
  $ImportNode,
  $StringNode,
  ImportNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseImportNode2,
  StringNode,
} from '#analyzer';
import {is, newText, Text} from '#core';
import {describe, expect, test} from 'vitest';

describe('import', () => {
  test('Import statement with errors', () => {
    const text = newText('import123 "abc"');
    const source = newCharacterStreamFromText(text);
    const context = newAnalyzerContext(source);
    const node = parseImportNode2(context);

    expect(node).toBeFalsy();
  });

  test('Import statement with errors', () => {
    const text = newText('import 7 17 37');
    getImportNode(text);
  });

  test('Import statement without errors', () => {
    const text = newText('import "@xon/core"');
    const node = getImportNode(text);

    expect(is(node.expression, $StringNode())).toBe(true);
    expect((node.expression as StringNode).content?.text.toNativeString()).toBe('@xon/core');
  });

  test('Import statement with body', () => {
    const text = newText(`import "abc"
  
  width
  height`);
    const node = getImportNode(text);

    expect(is(node.expression, $StringNode())).toBe(true);
    expect((node.expression as StringNode).content?.text.toNativeString()).toBe('abc');
    expect(node.body?.children?.count()).toBe(2);
  });
});

function getImportNode(text: Text): ImportNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseImportNode2(context);

  expect(node).toBeTruthy();
  expect(is(node, $ImportNode())).toBe(true);

  return node!;
}
