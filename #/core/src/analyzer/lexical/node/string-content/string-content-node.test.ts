import {is, newTextData, newTextResource, nothing} from '#common';
import {$StringContentNode, newLexicalAnalyzer, StringContentNode, stringLexicalParsers} from '#core';

test('string content', () => {
  const text = newTextData('"a"');
  const source = newTextResource(nothing, text);
  const analyzer = newLexicalAnalyzer(source);
  const nodes = analyzer.nodes(stringLexicalParsers());
  const node = nodes.at(0) as StringContentNode;

  expect(nodes.length()).toBe(1);
  expect(is(node, $StringContentNode)).toBe(true);
  expect(node.text.toString()).toBe('a');
});
