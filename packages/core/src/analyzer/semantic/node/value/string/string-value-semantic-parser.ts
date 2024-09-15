import {Nothing, nothing} from '#common';
import {
  $,
  Node,
  SemanticAnalyzer,
  StringNode,
  StringValueSemantic,
  is,
  stringTypeSemanticParse,
  stringValueSemantic,
} from '#core';

export function stringValueSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): StringValueSemantic | Nothing {
  if (!is(node, $.StringNode)) {
    return nothing;
  }

  return stringValueSemanticParse(analyzer, node);
}

export function stringValueSemanticParse(
  analyzer: SemanticAnalyzer,
  node: StringNode,
): StringValueSemantic | Nothing {
  const type = stringTypeSemanticParse(analyzer, node);

  return stringValueSemantic(node, type);
}
