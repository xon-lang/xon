import {$, is} from '../../../../../$';
import {Nothing, nothing} from '../../../../../../../lib/types';
import {Node} from '../../../../node';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {typeSemanticParse} from '../type-semantic-parser';
import {unknownTypeSemantic} from '../unknown/unknown-type-semantic';
import {InvokeTypeSemantic, invokeTypeSemantic} from './invoke-type-semantic';

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
