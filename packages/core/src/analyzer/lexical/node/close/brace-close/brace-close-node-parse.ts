import {Nothing, nothing, textData} from '#common';
import {BRACE_CLOSE, BraceCloseNode, braceCloseNode, LexicalAnalyzer} from '#core';

export function braceCloseNodeParse(analyzer: LexicalAnalyzer): BraceCloseNode | Nothing {
  if (!analyzer.checkTextAtIndex(BRACE_CLOSE)) {
    return nothing;
  }

  const text = textData(BRACE_CLOSE);
  const reference = analyzer.getResourceRange(text);

  return braceCloseNode(reference, text);
}
