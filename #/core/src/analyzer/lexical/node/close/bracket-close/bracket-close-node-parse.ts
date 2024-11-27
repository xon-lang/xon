import {newTextData, Nothing, nothing} from '#common';
import {BRACKET_CLOSE, BracketCloseNode, bracketCloseNode, LexicalAnalyzer} from '#core';

export function bracketCloseNodeParse(analyzer: LexicalAnalyzer): BracketCloseNode | Nothing {
  if (!analyzer.checkTextAtIndex(BRACKET_CLOSE)) {
    return nothing;
  }

  const text = newTextData(BRACKET_CLOSE);
  const reference = analyzer.getResourceRange(text);

  return bracketCloseNode(reference, text);
}
