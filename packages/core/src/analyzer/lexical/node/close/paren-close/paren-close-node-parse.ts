import {Nothing, nothing, textData} from '#common';
import {LexicalAnalyzer, PAREN_CLOSE, ParenCloseNode, parenCloseNode} from '#core';

export function parenCloseNodeParse(analyzer: LexicalAnalyzer): ParenCloseNode | Nothing {
  if (!analyzer.checkTextAtIndex(PAREN_CLOSE)) {
    return nothing;
  }

  const text = textData(PAREN_CLOSE);
  const reference = analyzer.getResourceRange(text);

  return parenCloseNode(reference, text);
}
