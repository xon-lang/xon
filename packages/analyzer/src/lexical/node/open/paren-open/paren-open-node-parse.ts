import {LexicalAnalyzer, PAREN_OPEN, ParenOpenNode, parenOpenNode} from '#analyzer';
import {newText, Nothing, nothing} from '#common';

export function parenOpenNodeParse(analyzer: LexicalAnalyzer): ParenOpenNode | Nothing {
  if (!analyzer.hasTextAtIndex(PAREN_OPEN)) {
    return nothing;
  }

  const text = newText(PAREN_OPEN);
  const reference = analyzer.textReference(text);

  return parenOpenNode(reference, text);
}
