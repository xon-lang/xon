import {is_v2, newTextData, newTextResource, nothing} from '#common';
import {$StringContentNode, createLexicalAnalyzer, StringContentNode, stringLexicalParsers} from '#core';

test('string content', () => {
  const text = newTextData('"a"');
  const source = newTextResource(nothing, text);
  const analyzer = createLexicalAnalyzer(source);
  const nodes = analyzer.nodes(stringLexicalParsers());
  const node = nodes.at(0) as StringContentNode;

  expect(nodes.length()).toBe(1);
  expect(is_v2(node, $StringContentNode)).toBe(true);
  expect(node.text.toString()).toBe('a');
});
