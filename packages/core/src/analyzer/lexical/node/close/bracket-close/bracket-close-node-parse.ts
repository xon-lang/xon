import {newText, Nothing, nothing} from '#common';
import {BRACKET_CLOSE, BracketCloseNode, bracketCloseNode, LexicalAnalyzer} from '#core';

export function bracketCloseNodeParse(analyzer: LexicalAnalyzer): BracketCloseNode | Nothing {
  if (!analyzer.hasTextAtIndex(BRACKET_CLOSE)) {
    return nothing;
  }

  const text = newText(BRACKET_CLOSE);
  const reference = analyzer.textReference(text);

  return bracketCloseNode(reference, text);
}
