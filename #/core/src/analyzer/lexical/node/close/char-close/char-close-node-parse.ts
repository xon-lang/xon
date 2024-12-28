import {newText, Nothing, nothing} from '#common';
import {CHAR_CLOSE, CharCloseNode, charCloseNode, LexicalAnalyzer} from '#core';

export function charCloseNodeParse(analyzer: LexicalAnalyzer): CharCloseNode | Nothing {
  if (!analyzer.hasTextAtIndex(CHAR_CLOSE)) {
    return nothing;
  }

  const text = newText(CHAR_CLOSE);
  const reference = analyzer.textReference(text);

  return charCloseNode(reference, text);
}
