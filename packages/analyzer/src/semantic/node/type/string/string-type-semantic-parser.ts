import {
  $StringNode,
  Node,
  SemanticAnalyzer,
  StringNode,
  StringTypeSemantic,
  newStringTypeSemantic,
} from '#analyzer';
import {Nothing, nothing} from '#common';
import {is} from '#typing';

export function stringTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): StringTypeSemantic | Nothing {
  if (!is(node, $StringNode())) {
    return nothing;
  }

  return stringTypeSemanticParse(analyzer, node);
}

export function stringTypeSemanticParse(analyzer: SemanticAnalyzer, node: StringNode): StringTypeSemantic {
  return newStringTypeSemantic(analyzer, node, node.value);
}
