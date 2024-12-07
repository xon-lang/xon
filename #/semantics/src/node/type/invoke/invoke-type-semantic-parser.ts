import {Nothing, nothing} from '#common';
import {
  InvokeTypeSemantic,
  invokeTypeSemantic,
  Node,
  SemanticAnalyzer,
  typeSemanticParse,
  unknownTypeSemantic,
} from '#semantics';
import {$, is} from '#typing';

export function invokeTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): InvokeTypeSemantic | Nothing {
  if (!is(node, $.InvokeNode)) {
    return nothing;
  }

  if (!is(node.group, $.AngleGroupNode)) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.group.open.reference, (x) => x.notImplemented());

    return nothing;
  }

  const args = node.group.items.map((x) =>
    x.value ? typeSemanticParse(analyzer, x.value) : unknownTypeSemantic(analyzer, x),
  );
  const instance = typeSemanticParse(analyzer, node.instance);

  if (args.length === 0) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.instance.reference, (x) => x.notImplemented());
  }

  return invokeTypeSemantic(analyzer, node, instance, args);
}
