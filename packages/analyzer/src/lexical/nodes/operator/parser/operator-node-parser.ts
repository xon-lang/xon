import {
  $ControlKeywordNode,
  $ModifierKeywordNode,
  $OperatorNode,
  $SymbolOperatorNode,
  $WordOperatorNode,
  AnalyzerContext,
  CONTROL_OPERATORS,
  MODIFIER_OPERATORS,
  OperatorNode,
  OPERATORS,
  SYMBOL_OPERATORS,
  WORD_OPERATORS,
} from '#analyzer';
import {Nothing} from '#common';

export function parseOperatorNode(context: AnalyzerContext): OperatorNode | Nothing {
  const node = OPERATORS.lastMap((o) =>
    context.source.takeWhile($OperatorNode, (x, i) => o.at(i)?.equals(x), o.count()),
  );

  if (node) {
    if (CONTROL_OPERATORS.hasItem(node.text)) {
      node.$ = $ControlKeywordNode;
    }

    if (MODIFIER_OPERATORS.hasItem(node.text)) {
      node.$ = $ModifierKeywordNode;
    }

    if (SYMBOL_OPERATORS.hasItem(node.text)) {
      node.$ = $SymbolOperatorNode;
    }

    if (WORD_OPERATORS.hasItem(node.text)) {
      node.$ = $WordOperatorNode;
    }
  }

  return node;
}
