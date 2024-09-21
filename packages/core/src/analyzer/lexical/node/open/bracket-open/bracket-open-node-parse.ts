import {Nothing, nothing, textData} from '#common';
import {BRACKET_OPEN, BracketOpenNode, bracketOpenNode, LexicalAnalyzer} from '#core';

export function bracketOpenNodeParse(analyzer: LexicalAnalyzer): BracketOpenNode | Nothing {
  if (!analyzer.checkTextAtIndex(BRACKET_OPEN)) {
    return nothing;
  }

  const text = textData(BRACKET_OPEN);
  const reference = analyzer.getResourceRange(text);

  return bracketOpenNode(reference, text);
}
