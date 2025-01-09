import {LexicalAnalyzer, SPACE, WhitespaceNode, whitespaceNode} from '#analyzer';
import {Nothing, nothing} from '#common';

export function whitespaceNodeParse(analyzer: LexicalAnalyzer): WhitespaceNode | Nothing {
  if (!analyzer.hasTextAtIndex(SPACE)) {
    return nothing;
  }

  const text = analyzer.resource.data.takeWhile((x) => SPACE.equals(x), analyzer.position.index);
  const range = analyzer.textReference(text);

  return whitespaceNode(reference, text);
}
