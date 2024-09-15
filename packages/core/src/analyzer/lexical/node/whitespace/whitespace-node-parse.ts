import {Nothing, nothing} from '#common';
import {LexicalAnalyzer, SPACE, WhitespaceNode, whitespaceNode} from '#core';

export function whitespaceNodeParse(analyzer: LexicalAnalyzer): WhitespaceNode | Nothing {
  if (!analyzer.checkTextAtIndex(SPACE)) {
    return nothing;
  }

  const text = analyzer.resource.data.takeWhile((x) => x === SPACE, analyzer.position.index);
  const reference = analyzer.getResourceRange(text);

  return whitespaceNode(reference, text);
}
