import {
  $InvokeNode,
  InvokeValueSemantic,
  invokeValueSemantic,
  Node,
  SemanticAnalyzer,
  valueSemanticParse,
} from '#analyzer';
import {Nothing, nothing} from '#common';
import {is} from '#typing';

export function invokeValueSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): InvokeValueSemantic | Nothing {
  if (!is(node, $InvokeNode)) {
    return nothing;
  }

  const instanceSemantic = valueSemanticParse(analyzer, node.instance);
  node.instance.semantic = instanceSemantic;

  return invokeValueSemantic(node, instanceSemantic.type);
}
