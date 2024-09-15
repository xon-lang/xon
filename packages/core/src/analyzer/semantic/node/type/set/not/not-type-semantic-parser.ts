import {Nothing, nothing} from '#common';
import {$, NOT, Node, NotTypeSemantic, SemanticAnalyzer, is, notTypeSemantic, typeSemanticParse} from '#core';

export function notTypeSemanticTryParse(analyzer: SemanticAnalyzer, node: Node): NotTypeSemantic | Nothing {
  if (is(node, $.PrefixNode) && node.operator.text.equals(NOT)) {
    const value = typeSemanticParse(analyzer, node.value);

    if (value) {
      return notTypeSemantic(node, value);
    }
  }

  return nothing;
}
