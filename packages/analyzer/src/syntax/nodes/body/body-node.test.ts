import {$NlNode, newAnalyzerContext, newCharacterStreamFromText, parseNlNode} from '#analyzer';
import {newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('cr lf', () => {
  const text = newText('\r\nabc');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseNlNode(context);

  expect(node).toBeTruthy();
  expect(is(node, $NlNode())).toBe(true);
  expect(node?.text.toNativeString()).toBe('\r\n');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.start.line).toBe(0);
  expect(node?.range.stop.index).toBe(2);
  expect(node?.range.stop.line).toBe(1);
});
