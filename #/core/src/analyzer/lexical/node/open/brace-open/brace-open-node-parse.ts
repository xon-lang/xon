import {newTextData, Nothing, nothing} from '#common';
import {BRACE_OPEN, BraceOpenNode, braceOpenNode, LexicalAnalyzer} from '#core';

export function braceOpenNodeParse(analyzer: LexicalAnalyzer): BraceOpenNode | Nothing {
  if (!analyzer.hasTextAtIndex(BRACE_OPEN)) {
    return nothing;
  }

  const text = newTextData(BRACE_OPEN);
  const reference = analyzer.textReference(text);

  return braceOpenNode(reference, text);
}
