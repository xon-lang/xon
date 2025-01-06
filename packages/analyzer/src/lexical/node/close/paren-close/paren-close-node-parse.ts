import {LexicalAnalyzer, PAREN_CLOSE, ParenCloseNode, parenCloseNode} from '#analyzer';
import {newText, Nothing, nothing} from '#common';

export function parenCloseNodeParse(analyzer: LexicalAnalyzer): ParenCloseNode | Nothing {
  if (!analyzer.hasTextAtIndex(PAREN_CLOSE)) {
    return nothing;
  }

  const text = newText(PAREN_CLOSE);
  const reference = analyzer.textReference(text);

  return parenCloseNode(reference, text);
}
