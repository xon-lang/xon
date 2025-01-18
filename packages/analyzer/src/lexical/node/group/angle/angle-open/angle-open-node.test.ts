import {$AngleOpenNode, newAnalyzerContext, newCharacterStreamFromText, parseAngleOpenNode} from '#analyzer';
import {newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('open angle', () => {
  const text = newText('<:');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseAngleOpenNode(context);

  expect(is(node, $AngleOpenNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('<:');
});
