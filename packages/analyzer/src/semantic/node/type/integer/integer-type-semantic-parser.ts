import {
  $IntegerNode,
  IntegerNode,
  IntegerTypeSemantic,
  newIntegerTypeSemantic,
  Node,
  SemanticAnalyzer,
} from '#analyzer';
import {Nothing, nothing} from '#common';
import {is} from '#typing';

export function integerTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): IntegerTypeSemantic | Nothing {
  if (!is(node, $IntegerNode())) {
    return nothing;
  }

  return integerTypeSemanticParse(analyzer, node);
}

export function integerTypeSemanticParse(analyzer: SemanticAnalyzer, node: IntegerNode): IntegerTypeSemantic {
  return newIntegerTypeSemantic(analyzer, node, node.value);
}
