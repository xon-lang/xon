import {Nothing, nothing} from '#common';
import {$, Node, SemanticAnalyzer, StringNode, StringTypeSemantic, is, stringTypeSemantic} from '#core';

export function stringTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): StringTypeSemantic | Nothing {
  if (!is(node, $.StringNode)) {
    return nothing;
  }

  return stringTypeSemanticParse(analyzer, node);
}

export function stringTypeSemanticParse(analyzer: SemanticAnalyzer, node: StringNode): StringTypeSemantic {
  return stringTypeSemantic(analyzer, node, node.value);
}
