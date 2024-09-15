import {Nothing, nothing} from '#common';
import {
  $,
  COMPLEMENT,
  ComplementTypeSemantic,
  complementTypeSemantic,
  is,
  Node,
  SemanticAnalyzer,
  typeSemanticParse,
} from '#core';

export function complementTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): ComplementTypeSemantic | Nothing {
  if (is(node, $.InfixNode) && node.operator.text.equals(COMPLEMENT)) {
    const left = typeSemanticParse(analyzer, node.left);
    const right = typeSemanticParse(analyzer, node.right);

    if (left && right) {
      return complementTypeSemantic(node, left, right);
    }
  }

  return nothing;
}
