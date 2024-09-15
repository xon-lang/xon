import {Nothing, nothing} from '#common';
import {$, IntegerNode, IntegerTypeSemantic, integerTypeSemantic, is, Node, SemanticAnalyzer} from '#core';

export function integerTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): IntegerTypeSemantic | Nothing {
  if (!is(node, $.IntegerNode)) {
    return nothing;
  }

  return integerTypeSemanticParse(analyzer, node);
}

export function integerTypeSemanticParse(analyzer: SemanticAnalyzer, node: IntegerNode): IntegerTypeSemantic {
  return integerTypeSemantic(analyzer, node, node.value);
}
