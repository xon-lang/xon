import {is_v2, Nothing, nothing} from '#common';
import {
  $CharCloseNode,
  $CharContentNode,
  CharCloseNode,
  CharContentNode,
  charLexicalParsers,
  CharNode,
  charNode,
  CharOpenNode,
  SyntaxAnalyzer,
} from '#core';

export function charNodeParse(analyzer: SyntaxAnalyzer, openNode: CharOpenNode): CharNode {
  const iterator = analyzer.lexicalAnalyzer.iterator(charLexicalParsers());
  let content: CharContentNode | Nothing = nothing;
  let closeNode: CharCloseNode | Nothing = nothing;

  for (const node of iterator) {
    if (is_v2(node, $CharContentNode)) {
      content = node;

      continue;
    }

    if (is_v2(node, $CharCloseNode)) {
      closeNode = node;

      break;
    }
  }

  return charNode(analyzer, openNode, content, closeNode);
}
