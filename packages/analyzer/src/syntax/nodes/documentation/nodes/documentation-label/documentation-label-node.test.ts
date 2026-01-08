import {
  $DocumentationLabelNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseDocumentationLabelNode,
} from '#analyzer';
import {is, newText} from '#core';
import {describe, expect, test} from 'vitest';

describe('documentation', () => {
  test('single at', () => {
    const text = newText('@');
    const source = newCharacterStreamFromText(text);
    const context = newAnalyzerContext(source);
    const node = parseDocumentationLabelNode(context);

    expect(node).toBeTruthy();
    expect(is(node, $DocumentationLabelNode())).toBe(true);
    expect(node?.range.start.index).toBe(0);
    expect(node?.range.stop.index).toBe(1);
  });

  test('at parameter', () => {
    const text = newText('@param and not param');
    const source = newCharacterStreamFromText(text);
    const context = newAnalyzerContext(source);
    const node = parseDocumentationLabelNode(context);

    expect(node).toBeTruthy();
    expect(is(node, $DocumentationLabelNode())).toBe(true);
    expect(node?.operator.text.toNativeString()).toBe('@');
    expect(node?.id?.text.toNativeString()).toBe('param');
    expect(node?.range.start.index).toBe(0);
    expect(node?.range.stop.index).toBe(20);

    expect(node?.id?.range.start.index).toBe(1);
    expect(node?.id?.range.stop.index).toBe(6);
  });
});
