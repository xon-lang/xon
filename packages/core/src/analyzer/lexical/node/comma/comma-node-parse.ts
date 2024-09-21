import {Nothing, nothing, textData} from '#common';
import {COMMA, CommaNode, commaNode, LexicalAnalyzer} from '#core';

export function commaNodeParse(analyzer: LexicalAnalyzer): CommaNode | Nothing {
  if (!analyzer.checkTextAtIndex(COMMA)) {
    return nothing;
  }

  const text = textData(COMMA);
  const reference = analyzer.getResourceRange(text);

  return commaNode(reference, text);
}
