import {Nothing, nothing} from '#common';
import {
  $,
  INTERSECTION,
  IntersectionTypeSemantic,
  intersectionTypeSemantic,
  is,
  Node,
  SemanticAnalyzer,
  typeSemanticParse,
} from '#core';

export function intersectionTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): IntersectionTypeSemantic | Nothing {
  if (is(node, $.InfixNode) && node.operator.text.equals(INTERSECTION)) {
    const left = typeSemanticParse(analyzer, node.left);
    const right = typeSemanticParse(analyzer, node.right);

    if (left && right) {
      return intersectionTypeSemantic(node, left, right);
    }
  }

  return nothing;
}
