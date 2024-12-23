import {newTextData, Nothing, nothing} from '#common';
import {LexicalAnalyzer, STRING_OPEN, StringOpenNode, stringOpenNode} from '#core';

export function stringOpenNodeParse(analyzer: LexicalAnalyzer): StringOpenNode | Nothing {
  if (!analyzer.hasTextAtIndex(STRING_OPEN)) {
    return nothing;
  }

  const text = newTextData(STRING_OPEN);
  const reference = analyzer.textReference(text);

  return stringOpenNode(reference, text);
}
