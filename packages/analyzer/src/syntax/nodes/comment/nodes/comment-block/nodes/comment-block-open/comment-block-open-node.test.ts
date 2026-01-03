import {
  $CommentBlockOpenNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseCommentBlockOpenNode,
} from '#analyzer';
import {is, newText} from '#core';
import {describe, expect, test} from 'vitest';

describe('comment block open', () => {
  test('comment block open', () => {
    const text = newText('--- ');
    const source = newCharacterStreamFromText(text);
    const context = newAnalyzerContext(source);
    const node = parseCommentBlockOpenNode(context);

    expect(is(node, $CommentBlockOpenNode())).toBe(true);
    expect(node?.getText().toNativeString()).toBe('---');
    expect(node?.range.start.index).toBe(0);
    expect(node?.range.stop.index).toBe(3);
  });
});
