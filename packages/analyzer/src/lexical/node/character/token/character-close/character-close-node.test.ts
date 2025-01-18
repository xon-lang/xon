import {$CharacterCloseNode, newAnalyzerContext, parseCharacterCloseNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('character close', () => {
  const text = newText("'a");
  const source = charStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseCharacterCloseNode(context);

  expect(is(node, $CharacterCloseNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe("'");
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(1);
});
