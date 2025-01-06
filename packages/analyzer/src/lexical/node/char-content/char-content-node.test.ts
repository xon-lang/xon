import {$CharContentNode, CharContentNode, charLexicalParsers, newLexicalAnalyzer} from '#analyzer';
import {newArrayData, newText, newTextResource, nothing} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('char content', () => {
  const text = newText("'a'");
  const source = newTextResource(nothing, text);
  const analyzer = newLexicalAnalyzer(source);
  const nodes = newArrayData(analyzer.iterator(charLexicalParsers()));
  const node = nodes.at(1) as CharContentNode;

  expect(nodes.count()).toBe(3);
  expect(is(node, $CharContentNode)).toBe(true);
  expect(node.text.toNativeString()).toBe('a');
});
