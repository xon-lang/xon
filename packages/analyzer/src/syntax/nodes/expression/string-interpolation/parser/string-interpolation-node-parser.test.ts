import {
  $ExpressionNode,
  $StringInterpolationNode,
  IntegerNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseStringInterpolationNode,
} from '#analyzer';
import {is, newText} from '#core';
import {describe, expect, test} from 'vitest';

describe('String interpolation', () => {
  test('no expression', () => {
    const text = newText('$"ab\n\nc"');
    const source = newCharacterStreamFromText(text);
    const context = newAnalyzerContext(source);
    const node = parseStringInterpolationNode(context);

    expect(is(node, $StringInterpolationNode())).toBe(true);
    expect(node?.open.text.toNativeString()).toBe('$"');
    expect(node?.close?.text.toNativeString()).toBe('"');
    expect(node?.range.start.index).toBe(0);
    expect(node?.range.start.line).toBe(0);
    expect(node?.range.start.column).toBe(0);
    expect(node?.range.stop.index).toBe(8);
    expect(node?.range.stop.line).toBe(2);
    expect(node?.range.stop.column).toBe(2);
    expect(node?.items.count()).toBe(1);
    expect(node?.items.at(0)?.content?.text.toNativeString()).toBe('ab\n\nc');
    expect(node?.items.at(0)?.expression).toBeFalsy();
  });

  test('single expression', () => {
    const text = newText('$"ab\n{123}\nc"');
    const source = newCharacterStreamFromText(text);
    const context = newAnalyzerContext(source);
    const node = parseStringInterpolationNode(context);

    expect(is(node, $StringInterpolationNode())).toBe(true);
    expect(node?.open.text.toNativeString()).toBe('$"');
    expect(node?.close?.text.toNativeString()).toBe('"');
    expect(node?.range.start.index).toBe(0);
    expect(node?.range.start.line).toBe(0);
    expect(node?.range.start.column).toBe(0);
    expect(node?.range.stop.index).toBe(13);
    expect(node?.range.stop.line).toBe(2);
    expect(node?.range.stop.column).toBe(2);
    expect(node?.items.count()).toBe(2);
    expect(node?.items.at(0)?.open?.text.toNativeString()).toBe('{');
    expect(node?.items.at(0)?.close?.text.toNativeString()).toBe('}');
    expect(node?.items.at(0)?.content?.text.toNativeString()).toBe('ab\n');
    expect(node?.items.at(0)?.expression).toBeTruthy();
    expect(is(node?.items.at(0)?.expression, $ExpressionNode())).toBe(true);
    expect((node?.items.at(0)?.expression as IntegerNode).token.text.toNativeString()).toBe('123');
  });

  test('several expression', () => {
    const text = newText('$"ab\n{123} {456}\nc"');
    const source = newCharacterStreamFromText(text);
    const context = newAnalyzerContext(source);
    const node = parseStringInterpolationNode(context);

    expect(is(node, $StringInterpolationNode())).toBe(true);
    expect(node?.open.text.toNativeString()).toBe('$"');
    expect(node?.close?.text.toNativeString()).toBe('"');
    expect(node?.range.start.index).toBe(0);
    expect(node?.range.start.line).toBe(0);
    expect(node?.range.start.column).toBe(0);
    expect(node?.range.stop.index).toBe(19);
    expect(node?.range.stop.line).toBe(2);
    expect(node?.range.stop.column).toBe(2);
    expect(node?.items.count()).toBe(3);
    expect(node?.items.at(0)?.open?.text.toNativeString()).toBe('{');
    expect(node?.items.at(0)?.close?.text.toNativeString()).toBe('}');
    expect(node?.items.at(0)?.content?.text.toNativeString()).toBe('ab\n');
    expect((node?.items.at(0)?.expression as IntegerNode).token.text.toNativeString()).toBe('123');
    expect(node?.items.at(1)?.content?.text.toNativeString()).toBe(' ');
    expect(node?.items.at(1)?.expression).toBeTruthy();
    expect((node?.items.at(1)?.expression as IntegerNode).token.text.toNativeString()).toBe('456');
  });
});
