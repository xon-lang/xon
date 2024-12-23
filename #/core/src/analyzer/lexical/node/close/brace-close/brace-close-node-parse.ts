import {newTextData, Nothing, nothing} from '#common';
import {BRACE_CLOSE, BraceCloseNode, braceCloseNode, LexicalAnalyzer} from '#core';

export function braceCloseNodeParse(analyzer: LexicalAnalyzer): BraceCloseNode | Nothing {
  if (!analyzer.hasTextAtIndex(BRACE_CLOSE)) {
    return nothing;
  }

  const text = newTextData(BRACE_CLOSE);
  const reference = analyzer.textReference(text);

  return braceCloseNode(reference, text);
}
