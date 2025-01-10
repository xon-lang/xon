import {$ParenOpenNode, LexicalAnalyzer, PAREN_OPEN, ParenOpenNode} from '#analyzer';
import {newText, Nothing, nothing} from '#common';

export function parenOpenNodeParse(analyzer: LexicalAnalyzer): ParenOpenNode | Nothing {
  if (!analyzer.hasTextAtIndex(PAREN_OPEN)) {
    return nothing;
  }

  const text = newText(PAREN_OPEN);
  const range = analyzer.textReference(text);

  return {$: $ParenOpenNode, text, range};
}
