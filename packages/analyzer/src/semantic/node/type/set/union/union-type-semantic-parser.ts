import {
  $InfixNode,
  Node,
  SemanticAnalyzer,
  UNION,
  UnionTypeSemantic,
  typeSemanticParse,
  unionTypeSemantic,
} from '#analyzer';
import {Nothing, nothing} from '#common';
import {is} from '#typing';

export function unionTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): UnionTypeSemantic | Nothing {
  if (is(node, $InfixNode) && node.operator.text.equals(UNION)) {
    const left = typeSemanticParse(analyzer, node.left);
    const right = typeSemanticParse(analyzer, node.right);

    if (left && right) {
      return unionTypeSemantic(node, left, right);
    }
  }

  return nothing;
}
