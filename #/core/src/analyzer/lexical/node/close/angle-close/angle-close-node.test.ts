import {newArrayData, newTextData, newTextResource, nothing} from '#common';
import {$AngleCloseNode, AngleCloseNode, charLexicalParsers, codeLexicalParsers, newLexicalAnalyzer} from '#core';
import {is} from '#typing';

test('close paren', () => {
  const text = newTextData(':>');
  const source = newTextResource(nothing, text);
  const analyzer = newLexicalAnalyzer(source);
  const nodes = newArrayData(Array.from(analyzer.iterator(codeLexicalParsers())));
  const node = nodes.at(0) as AngleCloseNode;

  expect(nodes.length()).toBe(3);
  expect(is(node, $AngleCloseNode)).toBe(true);
  expect(node.text.toString()).toBe('(');
});
