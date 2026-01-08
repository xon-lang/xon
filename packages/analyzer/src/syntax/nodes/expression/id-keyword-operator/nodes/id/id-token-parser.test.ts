import {
  $IdToken,
  IdToken,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseIdKeywordOperatorNode,
} from '#analyzer';
import {is, newText, nothing} from '#core';
import {describe, expect, test} from 'vitest';

describe('id token', () => {
  test('underscore', () => {
    const text = newText('_');
    const source = newCharacterStreamFromText(text);
    const context = newAnalyzerContext(source);
    const node = parseIdKeywordOperatorNode(context) as IdToken;

    expect(is(node, $IdToken())).toBe(true);
    expect(node.text.toNativeString()).toBe('_');
    expect(node?.range.start.index).toBe(0);
    expect(node?.range.stop.index).toBe(1);
  });

  test('underscore letters', () => {
    const text = newText('_abc');
    const source = newCharacterStreamFromText(text);
    const context = newAnalyzerContext(source);
    const node = parseIdKeywordOperatorNode(context) as IdToken;

    expect(is(node, $IdToken())).toBe(true);
    expect(node.text.toNativeString()).toBe('_abc');
    expect(node?.range.start.index).toBe(0);
    expect(node?.range.stop.index).toBe(4);
  });

  test('underscore gap letters', () => {
    const text = newText('_ abc');
    const source = newCharacterStreamFromText(text);
    const context = newAnalyzerContext(source);
    const node = parseIdKeywordOperatorNode(context) as IdToken;

    expect(is(node, $IdToken())).toBe(true);
    expect(node.text.toNativeString()).toBe('_');
    expect(node?.range.start.index).toBe(0);
    expect(node?.range.stop.index).toBe(1);
  });

  test('digits gap letters', () => {
    const text = newText('123 abc');
    const source = newCharacterStreamFromText(text);
    const context = newAnalyzerContext(source);
    const node = parseIdKeywordOperatorNode(context) as IdToken;

    expect(node).toBe(nothing);
  });

  test('letters and digits', () => {
    const text = newText('abc123');
    const source = newCharacterStreamFromText(text);
    const context = newAnalyzerContext(source);
    const node = parseIdKeywordOperatorNode(context) as IdToken;

    expect(is(node, $IdToken())).toBe(true);
    expect(node.text.toNativeString()).toBe('abc123');
    expect(node?.range.start.index).toBe(0);
    expect(node?.range.stop.index).toBe(6);
  });

  test('letters and underscore', () => {
    const text = newText('abc_');
    const source = newCharacterStreamFromText(text);
    const context = newAnalyzerContext(source);
    const node = parseIdKeywordOperatorNode(context) as IdToken;

    expect(is(node, $IdToken())).toBe(true);
    expect(node.text.toNativeString()).toBe('abc_');
    expect(node?.range.start.index).toBe(0);
    expect(node?.range.stop.index).toBe(4);
  });
});
