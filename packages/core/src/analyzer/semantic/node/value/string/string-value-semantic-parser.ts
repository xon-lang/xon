import {Nothing, nothing} from '#common';
import {
  Node,
  SemanticAnalyzer,
  StringNode,
  StringValueSemantic,
  stringTypeSemanticParse,
  stringValueSemantic,
} from '#core';
import {$, is} from '#typing';

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
