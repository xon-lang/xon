import {$ParenCloseNode, LexicalAnalyzer, PAREN_CLOSE, ParenCloseNode} from '#analyzer';
import {newText, Nothing, nothing} from '#common';

export function parenCloseNodeParse(analyzer: LexicalAnalyzer): ParenCloseNode | Nothing {
  if (!analyzer.hasTextAtIndex(PAREN_CLOSE)) {
    return nothing;
  }

  const text = newText(PAREN_CLOSE);
  const range = analyzer.textReference(text);

  return {$: $ParenCloseNode, text, range};
}
