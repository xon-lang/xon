import {Nothing, nothing} from '#common';
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
import {is} from '#typing';

export function charNodeParse(analyzer: SyntaxAnalyzer, openNode: CharOpenNode): CharNode {
  const iterator = analyzer.lexicalAnalyzer.iterator(charLexicalParsers());
  let content: CharContentNode | Nothing = nothing;
  let closeNode: CharCloseNode | Nothing = nothing;

  for (const node of iterator) {
    if (is(node, $CharContentNode)) {
      content = node;

      continue;
    }

    if (is(node, $CharCloseNode)) {
      closeNode = node;

      break;
    }
  }

  return charNode(analyzer, openNode, content, closeNode);
}
