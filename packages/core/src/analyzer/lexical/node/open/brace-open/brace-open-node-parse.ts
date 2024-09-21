import {Nothing, nothing, textData} from '#common';
import {BRACE_OPEN, BraceOpenNode, braceOpenNode, LexicalAnalyzer} from '#core';

export function braceOpenNodeParse(analyzer: LexicalAnalyzer): BraceOpenNode | Nothing {
  if (!analyzer.checkTextAtIndex(BRACE_OPEN)) {
    return nothing;
  }

  const text = textData(BRACE_OPEN);
  const reference = analyzer.getResourceRange(text);

  return braceOpenNode(reference, text);
}
