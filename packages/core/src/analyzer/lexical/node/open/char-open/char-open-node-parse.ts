import {Nothing, nothing} from '#common';
import {CHAR_OPEN, CharOpenNode, charOpenNode, LexicalAnalyzer, textData} from '#core';

export function charOpenNodeParse(analyzer: LexicalAnalyzer): CharOpenNode | Nothing {
  if (!analyzer.checkTextAtIndex(CHAR_OPEN)) {
    return nothing;
  }

  const text = textData(CHAR_OPEN);
  const reference = analyzer.getResourceRange(text);

  return charOpenNode(reference, text);
}
