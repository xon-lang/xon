import {Nothing, nothing} from '#common';
import {LexicalAnalyzer, SPACE, WhitespaceNode, whitespaceNode} from '#core';

export function whitespaceNodeParse(analyzer: LexicalAnalyzer): WhitespaceNode | Nothing {
  if (!analyzer.hasTextAtIndex(SPACE)) {
    return nothing;
  }

  const text = analyzer.resource.data.takeWhile((x) => x.equals(SPACE), analyzer.position.index);
  const reference = analyzer.textReference(text);

  return whitespaceNode(reference, text);
}
