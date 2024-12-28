import {newText, Nothing, nothing} from '#common';
import {LexicalAnalyzer, STRING_CLOSE, StringCloseNode, stringCloseNode} from '#core';

export function stringCloseNodeParse(analyzer: LexicalAnalyzer): StringCloseNode | Nothing {
  if (!analyzer.hasTextAtIndex(STRING_CLOSE)) {
    return nothing;
  }

  const text = newText(STRING_CLOSE);
  const reference = analyzer.textReference(text);

  return stringCloseNode(reference, text);
}
