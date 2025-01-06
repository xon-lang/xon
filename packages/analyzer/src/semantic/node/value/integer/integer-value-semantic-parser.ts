import {
  IntegerValueSemantic,
  Node,
  SemanticAnalyzer,
  integerTypeSemanticTryParse,
  integerValueSemantic,
} from '#analyzer';
import {Nothing, nothing} from '#common';

export function integerValueSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): IntegerValueSemantic | Nothing {
  const type = integerTypeSemanticTryParse(analyzer, node);

  if (!type) {
    return nothing;
  }

  return integerValueSemantic(node, type);
}
