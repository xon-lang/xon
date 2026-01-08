import {AnalyzerContext, LexicalNode, SPACE} from '#analyzer';
import {Nothing} from '#core';

// todo remove 'parseWhitespaceNode'
export function parseWhitespaceNode(context: AnalyzerContext): LexicalNode | Nothing {
  const node = context.source.takeWhile((x) => x.equals(SPACE));

  if (node) {
    context.hiddenNodes.addLastItem(node);
  }

  return node;
}
