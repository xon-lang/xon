import {Nothing, nothing} from '#/common';
import {
  StringCloseNode,
  StringContentNode,
  StringNode,
  StringOpenNode,
  SyntaxAnalyzer,
  stringLexicalParsers,
  stringNode,
} from '#/core';
import {$, is} from '#/typing';

export function stringNodeParse(analyzer: SyntaxAnalyzer, openNode: StringOpenNode): StringNode {
  const iterator = analyzer.lexicalAnalyzer.iterator(stringLexicalParsers());
  let content: StringContentNode | Nothing = nothing;
  let closeNode: StringCloseNode | Nothing = nothing;

  for (const node of iterator) {
    if (is(node, $.StringContentNode)) {
      content = node;

      continue;
    }

    if (is(node, $.StringCloseNode)) {
      closeNode = node;

      break;
    }
  }

  return stringNode(analyzer, openNode, content, closeNode);
}
