import {Nothing, nothing} from '#common';
import {IntegerNode, IntegerTypeSemantic, integerTypeSemantic, Node, SemanticAnalyzer} from '#semantics';
import {$, is} from '#typing';

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
