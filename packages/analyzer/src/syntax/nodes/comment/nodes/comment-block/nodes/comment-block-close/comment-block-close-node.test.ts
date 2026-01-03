import {
  $CommentBlockCloseNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseCommentBlockCloseNode,
} from '#analyzer';
import {is, newText} from '#core';
import {describe, expect, test} from 'vitest';

describe('comment block', () => {
  test('close', () => {
    const text = newText('---');
    const source = newCharacterStreamFromText(text);
    const context = newAnalyzerContext(source);
    const node = parseCommentBlockCloseNode(context);

    expect(is(node, $CommentBlockCloseNode())).toBe(true);
    expect(node?.getText().toNativeString()).toBe('---');
    expect(node?.range.start.index).toBe(0);
    expect(node?.range.stop.index).toBe(3);
  });

  test('close with spaces', () => {
    const text = newText('---    ');
    const source = newCharacterStreamFromText(text);
    const context = newAnalyzerContext(source);
    const node = parseCommentBlockCloseNode(context);

    expect(is(node, $CommentBlockCloseNode())).toBe(true);
    expect(node?.getText().toNativeString()).toBe('---');
    expect(node?.range.start.index).toBe(0);
    expect(node?.range.stop.index).toBe(3);
  });
});
