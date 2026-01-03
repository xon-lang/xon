import {
  $DocumentationLabelOperatorNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseDocumentationLabelOperatorNode,
} from '#analyzer';
import {is, newText} from '#core';
import {describe, expect, test} from 'vitest';

describe('at', () => {
  test('single at', () => {
    const text = newText('@');
    const source = newCharacterStreamFromText(text);
    const context = newAnalyzerContext(source);
    const node = parseDocumentationLabelOperatorNode(context);

    expect(is(node, $DocumentationLabelOperatorNode())).toBe(true);
    expect(node?.getText().toNativeString()).toBe('@');
    expect(node?.range.start.index).toBe(0);
    expect(node?.range.stop.index).toBe(1);
  });

  test('at parameter', () => {
    const text = newText('@param and not param');
    const source = newCharacterStreamFromText(text);
    const context = newAnalyzerContext(source);
    const node = parseDocumentationLabelOperatorNode(context);

    expect(is(node, $DocumentationLabelOperatorNode())).toBe(true);
    expect(node?.getText().toNativeString()).toBe('@');
    expect(node?.range.start.index).toBe(0);
    expect(node?.range.stop.index).toBe(1);
  });
});
