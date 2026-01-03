import {$WhitespaceNode, AnalyzerContext, SPACE, WhitespaceNode} from '#analyzer';
import {Nothing} from '#core';

export function parseWhitespaceNode(context: AnalyzerContext): WhitespaceNode | Nothing {
  const node = context.source.takeWhile($WhitespaceNode(), (x) => x.equals(SPACE));

  if (node) {
    node.isHidden = true;
    context.hiddenNodes.addLastItem(node);
  }

  return node;
}
