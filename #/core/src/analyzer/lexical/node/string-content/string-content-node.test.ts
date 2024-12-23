import {newArrayData, newTextData, newTextResource, nothing} from '#common';
import {$StringContentNode, newLexicalAnalyzer, StringContentNode, stringLexicalParsers} from '#core';
import {is} from '#typing';

test('string content', () => {
  const text = newTextData('"a"');
  const source = newTextResource(nothing, text);
  const analyzer = newLexicalAnalyzer(source);
  const nodes = newArrayData(Array.from(analyzer.iterator(stringLexicalParsers())));
  const node = nodes.at(1) as StringContentNode;

  expect(nodes.length()).toBe(3);
  expect(is(node, $StringContentNode)).toBe(true);
  expect(node.text.toString()).toBe('a');
});
