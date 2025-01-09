import {$BraceOpenNode, BRACE_OPEN, BraceOpenNode, LexicalAnalyzer} from '#analyzer';
import {newText, Nothing, nothing} from '#common';

export function braceOpenNodeParse(analyzer: LexicalAnalyzer): BraceOpenNode | Nothing {
  if (!analyzer.hasTextAtIndex(BRACE_OPEN)) {
    return nothing;
  }

  const text = newText(BRACE_OPEN);
  const range = analyzer.textReference(text);

  return {$: $BraceOpenNode, text, range};
}
