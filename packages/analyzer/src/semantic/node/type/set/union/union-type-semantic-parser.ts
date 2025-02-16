import {
  $InfixNode,
  Node,
  OR,
  SemanticAnalyzer,
  typeSemanticParse,
  UnionTypeSemantic,
  unionTypeSemantic,
} from '#analyzer';
import {Nothing, nothing} from '#common';
import {is} from '#typing';

export function unionTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): UnionTypeSemantic | Nothing {
  if (is(node, $InfixNode()) && node.operatorNode.text.equals(OR)) {
    const left = typeSemanticParse(analyzer, node.leftNode);
    const right = typeSemanticParse(analyzer, node.rightNode);

    if (left && right) {
      return unionTypeSemantic(node, left, right);
    }
  }

  return nothing;
}
