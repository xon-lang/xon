import {BRACE_CLOSE, BraceCloseNode, braceCloseNode, LexicalAnalyzer} from '#analyzer';
import {newText, Nothing, nothing} from '#common';

export function braceCloseNodeParse(analyzer: LexicalAnalyzer): BraceCloseNode | Nothing {
  if (!analyzer.hasTextAtIndex(BRACE_CLOSE)) {
    return nothing;
  }

  const text = newText(BRACE_CLOSE);
  const reference = analyzer.textReference(text);

  return braceCloseNode(reference, text);
}
