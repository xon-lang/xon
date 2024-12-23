import {newTextData, Nothing, nothing} from '#common';
import {LexicalAnalyzer, PAREN_CLOSE, ParenCloseNode, parenCloseNode} from '#core';

export function parenCloseNodeParse(analyzer: LexicalAnalyzer): ParenCloseNode | Nothing {
  if (!analyzer.hasTextAtIndex(PAREN_CLOSE)) {
    return nothing;
  }

  const text = newTextData(PAREN_CLOSE);
  const reference = analyzer.textReference(text);

  return parenCloseNode(reference, text);
}
