import {$, is} from '../../../../../$';
import {Nothing, nothing} from '../../../../../../lib/types';
import {Node} from '../../../../node';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {itemNodeType} from '../array/array-type-semantic-parser';
import {typeSemanticParse} from '../type-semantic-parser';
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

  const args = node.group.items.map((x) => itemNodeType(analyzer, x));
  const instance = typeSemanticParse(analyzer, node.instance);

  if (args.length === 0) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.instance.reference, (x) => x.notImplemented());
  }

  return invokeTypeSemantic(node, instance, args);
}
