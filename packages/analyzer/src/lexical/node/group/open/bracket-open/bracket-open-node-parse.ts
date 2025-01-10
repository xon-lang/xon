import {$BracketOpenNode, BRACKET_OPEN, BracketOpenNode, LexicalAnalyzer} from '#analyzer';
import {newText, Nothing, nothing} from '#common';

export function bracketOpenNodeParse(analyzer: LexicalAnalyzer): BracketOpenNode | Nothing {
  if (!analyzer.hasTextAtIndex(BRACKET_OPEN)) {
    return nothing;
  }

  const text = newText(BRACKET_OPEN);
  const range = analyzer.textReference(text);

  return {$: $BracketOpenNode, text, range};
}
