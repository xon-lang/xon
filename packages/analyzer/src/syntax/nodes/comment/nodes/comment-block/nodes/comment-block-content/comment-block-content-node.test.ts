import {
  $CommentBlockContentNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseCommentBlockContentNode,
} from '#analyzer';
import {is, newText} from '#core';
import {describe, expect, test} from 'vitest';

describe('comment block content', () => {
  test('comment block content', () => {
    const text = newText('abc');
    const source = newCharacterStreamFromText(text);
    const context = newAnalyzerContext(source);
    const node = parseCommentBlockContentNode(context);

    expect(is(node, $CommentBlockContentNode())).toBe(true);
    expect(node?.getText().toNativeString()).toBe('abc');
    expect(node?.range.start.index).toBe(0);
    expect(node?.range.stop.index).toBe(3);
  });
});
