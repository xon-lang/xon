import {newTextData, Nothing, nothing} from '#common';
import {
  AFFIX_MODIFIERS,
  idNode,
  idNodeParse,
  LexicalAnalyzer,
  LexicalNode,
  operatorNode,
  OPERATORS_SORTED,
} from '#core';

export function operatorNodeParse(analyzer: LexicalAnalyzer): LexicalNode | Nothing {
  const operator = OPERATORS_SORTED.last((x) => analyzer.hasTextAtIndex(x));

  if (!operator) {
    return nothing;
  }

  const text = newTextData(operator);

  if (analyzer.previousNonHiddenNode && AFFIX_MODIFIERS.hasItem(analyzer.previousNonHiddenNode.text)) {
    const range = analyzer.textReference(text);

    return idNode(range, text);
  }

  const id = idNodeParse(analyzer);

  if (id && id.text.length() > text.length()) {
    return id;
  }

  const reference = analyzer.textReference(text);

  return operatorNode(reference, text);
}
