import {Nothing, nothing} from '#common';
import {CharValueSemantic, Node, SemanticAnalyzer, charTypeSemanticTryParse, charValueSemantic} from '#core';

export function charValueSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): CharValueSemantic | Nothing {
  const type = charTypeSemanticTryParse(analyzer, node);

  if (!type) {
    return nothing;
  }

  return charValueSemantic(node, type);
}
