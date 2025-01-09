import {$BraceCloseNode, BRACE_CLOSE, BraceCloseNode, LexicalAnalyzer} from '#analyzer';
import {newText, Nothing, nothing} from '#common';

export function braceCloseNodeParse(analyzer: LexicalAnalyzer): BraceCloseNode | Nothing {
  if (!analyzer.hasTextAtIndex(BRACE_CLOSE)) {
    return nothing;
  }

  const text = newText(BRACE_CLOSE);
  const range = analyzer.textReference(text);

  return {$: $BraceCloseNode, text, range};
}
