import {newTextData, Nothing, nothing} from '#/common';
import {COMMA, CommaNode, commaNode, LexicalAnalyzer} from '#/core';

export function commaNodeParse(analyzer: LexicalAnalyzer): CommaNode | Nothing {
  if (!analyzer.checkTextAtIndex(COMMA)) {
    return nothing;
  }

  const text = newTextData(COMMA);
  const reference = analyzer.getResourceRange(text);

  return commaNode(reference, text);
}
