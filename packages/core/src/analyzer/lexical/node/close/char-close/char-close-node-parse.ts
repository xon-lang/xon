import {Nothing, nothing, textData} from '#common';
import {CHAR_CLOSE, CharCloseNode, charCloseNode, LexicalAnalyzer} from '#core';

export function charCloseNodeParse(analyzer: LexicalAnalyzer): CharCloseNode | Nothing {
  if (!analyzer.checkTextAtIndex(CHAR_CLOSE)) {
    return nothing;
  }

  const text = textData(CHAR_CLOSE);
  const reference = analyzer.getResourceRange(text);

  return charCloseNode(reference, text);
}
