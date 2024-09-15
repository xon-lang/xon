import {Nothing, nothing} from '#common';
import {
  AFFIX_MODIFIERS,
  idNode,
  idNodeParse,
  LexicalAnalyzer,
  LexicalNode,
  operatorNode,
  OPERATORS_SORTED,
  textData,
} from '#core';

export function operatorNodeParse(analyzer: LexicalAnalyzer): LexicalNode | Nothing {
  const operator = OPERATORS_SORTED.last((x) => analyzer.checkTextAtIndex(x));

  if (!operator) {
    return nothing;
  }

  const text = textData(operator);

  if (
    analyzer.previousNonHiddenNode &&
    AFFIX_MODIFIERS.includes(analyzer.previousNonHiddenNode.text.toString())
  ) {
    const range = analyzer.getResourceRange(text);

    return idNode(range, text);
  }

  const id = idNodeParse(analyzer);

  if (id && id.text.length() > text.length()) {
    return id;
  }

  const reference = analyzer.getResourceRange(text);

  return operatorNode(reference, text);
}
