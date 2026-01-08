import {
  $IntegerNode,
  IntegerNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseNumberNode,
} from '#analyzer';
import {is, newText} from '#core';
import {describe, expect, test} from 'vitest';

describe('integer number', () => {
  test('integer', () => {
    const text = newText('123');
    const source = newCharacterStreamFromText(text);
    const context = newAnalyzerContext(source);
    const node = parseNumberNode(context) as IntegerNode;

    expect(is(node, $IntegerNode())).toBe(true);
    expect(node?.token.text.toNativeString()).toBe('123');
    expect(node?.range.start.index).toBe(0);
    expect(node?.range.stop.index).toBe(3);
  });
});
