import {newTextData, Nothing, nothing} from '#common';
import {LexicalAnalyzer, PAREN_OPEN, ParenOpenNode, parenOpenNode} from '#core';

export function parenOpenNodeParse(analyzer: LexicalAnalyzer): ParenOpenNode | Nothing {
  if (!analyzer.checkTextAtIndex(PAREN_OPEN)) {
    return nothing;
  }

  const text = newTextData(PAREN_OPEN);
  const reference = analyzer.getResourceRange(text);

  return parenOpenNode(reference, text);
}
