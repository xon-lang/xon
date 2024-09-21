import {Nothing, nothing} from '#common';
import {Node, NOT, NotTypeSemantic, notTypeSemantic, SemanticAnalyzer, typeSemanticParse} from '#core';
import {$, is} from '#typing';

export function notTypeSemanticTryParse(analyzer: SemanticAnalyzer, node: Node): NotTypeSemantic | Nothing {
  if (is(node, $.PrefixNode) && node.operator.text.equals(NOT)) {
    const value = typeSemanticParse(analyzer, node.value);

    if (value) {
      return notTypeSemantic(node, value);
    }
  }

  return nothing;
}
