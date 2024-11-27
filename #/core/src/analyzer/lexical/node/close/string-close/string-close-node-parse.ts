import {newTextData, Nothing, nothing} from '#common';
import {LexicalAnalyzer, STRING_CLOSE, StringCloseNode, stringCloseNode} from '#core';

export function stringCloseNodeParse(analyzer: LexicalAnalyzer): StringCloseNode | Nothing {
  if (!analyzer.checkTextAtIndex(STRING_CLOSE)) {
    return nothing;
  }

  const text = newTextData(STRING_CLOSE);
  const reference = analyzer.getResourceRange(text);

  return stringCloseNode(reference, text);
}
