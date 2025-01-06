import {
  $InfixNode,
  COMPLEMENT,
  ComplementTypeSemantic,
  complementTypeSemantic,
  Node,
  SemanticAnalyzer,
  typeSemanticParse,
} from '#analyzer';
import {Nothing, nothing} from '#common';
import {is} from '#typing';

export function complementTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): ComplementTypeSemantic | Nothing {
  if (is(node, $InfixNode) && node.operator.text.equals(COMPLEMENT)) {
    const left = typeSemanticParse(analyzer, node.left);
    const right = typeSemanticParse(analyzer, node.right);

    if (left && right) {
      return complementTypeSemantic(node, left, right);
    }
  }

  return nothing;
}
