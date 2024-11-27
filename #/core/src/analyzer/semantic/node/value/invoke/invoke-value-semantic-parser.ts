import {Nothing, nothing} from '#common';
import {InvokeValueSemantic, invokeValueSemantic, Node, SemanticAnalyzer, valueSemanticParse} from '#core';
import {$, is} from '#typing';

export function invokeValueSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): InvokeValueSemantic | Nothing {
  if (!is(node, $.InvokeNode)) {
    return nothing;
  }

  const instanceSemantic = valueSemanticParse(analyzer, node.instance);
  node.instance.semantic = instanceSemantic;

  return invokeValueSemantic(node, instanceSemantic.type);
}
