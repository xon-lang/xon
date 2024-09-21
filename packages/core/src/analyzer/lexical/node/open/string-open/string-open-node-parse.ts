import {Nothing, nothing, textData} from '#common';
import {LexicalAnalyzer, STRING_OPEN, StringOpenNode, stringOpenNode} from '#core';

export function stringOpenNodeParse(analyzer: LexicalAnalyzer): StringOpenNode | Nothing {
  if (!analyzer.checkTextAtIndex(STRING_OPEN)) {
    return nothing;
  }

  const text = textData(STRING_OPEN);
  const reference = analyzer.getResourceRange(text);

  return stringOpenNode(reference, text);
}
