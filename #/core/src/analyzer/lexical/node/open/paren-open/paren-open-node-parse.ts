import {newTextData, Nothing, nothing} from '#common';
import {LexicalAnalyzer, PAREN_OPEN, ParenOpenNode, parenOpenNode} from '#core';

export function parenOpenNodeParse(analyzer: LexicalAnalyzer): ParenOpenNode | Nothing {
  if (!analyzer.hasTextAtIndex(PAREN_OPEN)) {
    return nothing;
  }

  const text = newTextData(PAREN_OPEN);
  const reference = analyzer.textReference(text);

  return parenOpenNode(reference, text);
}
