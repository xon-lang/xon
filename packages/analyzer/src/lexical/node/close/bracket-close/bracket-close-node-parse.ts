import {$BracketCloseNode, BRACKET_CLOSE, BracketCloseNode, LexicalAnalyzer} from '#analyzer';
import {newText, Nothing, nothing} from '#common';

export function bracketCloseNodeParse(analyzer: LexicalAnalyzer): BracketCloseNode | Nothing {
  if (!analyzer.hasTextAtIndex(BRACKET_CLOSE)) {
    return nothing;
  }

  const text = newText(BRACKET_CLOSE);
  const range = analyzer.textReference(text);

  return {$: $BracketCloseNode, text, range};
}
