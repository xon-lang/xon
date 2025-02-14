import {$CommaNode, newAnalyzerContext, newCharacterStreamFromText, parseCommaNode} from '#analyzer';
import {newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('comma', () => {
  const text = newText(',');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseCommaNode(context);

  expect(node).toBeTruthy();
  expect(is(node, $CommaNode)).toBe(true);
});
