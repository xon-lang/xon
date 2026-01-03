import {
  $CharacterCloseNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseCharacterCloseNode,
} from '#analyzer';
import {is, newText} from '#core';
import {describe, expect, test} from 'vitest';

describe('character close', () => {
  test('character close', () => {
    const text = newText("'a");
    const source = newCharacterStreamFromText(text);
    const context = newAnalyzerContext(source);
    const node = parseCharacterCloseNode(context);

    expect(is(node, $CharacterCloseNode())).toBe(true);
    expect(node?.getText().toNativeString()).toBe("'");
    expect(node?.range.start.index).toBe(0);
    expect(node?.range.stop.index).toBe(1);
  });
});
