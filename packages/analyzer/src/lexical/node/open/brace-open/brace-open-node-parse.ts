import {BRACE_OPEN, BraceOpenNode, braceOpenNode, LexicalAnalyzer} from '#analyzer';
import {newText, Nothing, nothing} from '#common';

export function braceOpenNodeParse(analyzer: LexicalAnalyzer): BraceOpenNode | Nothing {
  if (!analyzer.hasTextAtIndex(BRACE_OPEN)) {
    return nothing;
  }

  const text = newText(BRACE_OPEN);
  const reference = analyzer.textReference(text);

  return braceOpenNode(reference, text);
}
