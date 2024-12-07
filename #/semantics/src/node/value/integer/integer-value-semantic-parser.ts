import {Nothing, nothing} from '#common';
import {
  IntegerValueSemantic,
  Node,
  SemanticAnalyzer,
  integerTypeSemanticTryParse,
  integerValueSemantic,
} from '#semantics';

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
