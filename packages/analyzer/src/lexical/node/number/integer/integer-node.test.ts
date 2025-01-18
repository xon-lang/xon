import {$IntegerNode, IntegerNode, newAnalyzerContext, parseNumberNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('integer', () => {
  const text = newText('123');
  const source = charStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseNumberNode(context) as IntegerNode;

  expect(is(node, $IntegerNode)).toBe(true);
  expect(node?.contentNode.text.toNativeString()).toBe('123');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(3);
});
