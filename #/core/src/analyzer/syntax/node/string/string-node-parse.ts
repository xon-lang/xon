import {is_v2, Nothing, nothing} from '#common';
import {
  $StringCloseNode,
  $StringContentNode,
  StringCloseNode,
  StringContentNode,
  stringLexicalParsers,
  StringNode,
  stringNode,
  StringOpenNode,
  SyntaxAnalyzer,
} from '#core';

export function stringNodeParse(analyzer: SyntaxAnalyzer, openNode: StringOpenNode): StringNode {
  const iterator = analyzer.lexicalAnalyzer.iterator(stringLexicalParsers());
  let content: StringContentNode | Nothing = nothing;
  let closeNode: StringCloseNode | Nothing = nothing;

  for (const node of iterator) {
    if (is_v2(node, $StringContentNode)) {
      content = node;

      continue;
    }

    if (is_v2(node, $StringCloseNode)) {
      closeNode = node;

      break;
    }
  }

  return stringNode(analyzer, openNode, content, closeNode);
}
