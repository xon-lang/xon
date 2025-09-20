import {$ModuleNode, newAnalyzerContext, newCharacterStreamFromText, parseModule} from '#analyzer';
import {newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Module node', () => {
  const text = newText('abc\n def');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseModule(context);

  expect(is(node, $ModuleNode())).toBe(true);
  expect(node.children.count()).toBe(1);
});
