import {Nothing, nothing} from '#common';
import {
  $InfixNode,
  INTERSECTION,
  IntersectionTypeSemantic,
  intersectionTypeSemantic,
  Node,
  SemanticAnalyzer,
  typeSemanticParse,
} from '#core';
import {is} from '#typing';

export function intersectionTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): IntersectionTypeSemantic | Nothing {
  if (is(node, $InfixNode) && node.operator.text.equals(INTERSECTION)) {
    const left = typeSemanticParse(analyzer, node.left);
    const right = typeSemanticParse(analyzer, node.right);

    if (left && right) {
      return intersectionTypeSemantic(node, left, right);
    }
  }

  return nothing;
}
