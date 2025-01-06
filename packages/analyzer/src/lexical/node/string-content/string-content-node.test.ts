import {$StringContentNode, newLexicalAnalyzer, StringContentNode, stringLexicalParsers} from '#analyzer';
import {newArrayData, newText, newTextResource, nothing} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('string content', () => {
  const text = newText('"a"');
  const source = newTextResource(nothing, text);
  const analyzer = newLexicalAnalyzer(source);
  const nodes = newArrayData(Array.from(analyzer.iterator(stringLexicalParsers())));
  const node = nodes.at(1) as StringContentNode;

  expect(nodes.count()).toBe(3);
  expect(is(node, $StringContentNode)).toBe(true);
  expect(node.text.toNativeString()).toBe('a');
});
