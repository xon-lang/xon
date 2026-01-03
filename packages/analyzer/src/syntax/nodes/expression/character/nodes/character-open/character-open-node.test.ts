import {
  $CharacterOpenNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseCharacterOpenNode,
} from '#analyzer';
import {is, newText} from '#core';
import {expect, test} from 'vitest';

test('character open', () => {
  const text = newText("'a");
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseCharacterOpenNode(context);

  expect(is(node, $CharacterOpenNode())).toBe(true);
  expect(node?.getText().toNativeString()).toBe("'");
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(1);
});
