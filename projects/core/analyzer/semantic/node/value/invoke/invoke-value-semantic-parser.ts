import {$, is} from '../../../../../$';
import {Nothing, nothing} from '../../../../../../lib/types';
import {Node} from '../../../../node';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {valueSemanticParse} from '../value-semantic-parser';
import {InvokeValueSemantic, invokeValueSemantic} from './invoke-value-semantic';

export function invokeValueSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): InvokeValueSemantic | Nothing {
  if (!is(node, $.InvokeNode)) {
    return nothing;
  }

  const instanceSemantic = valueSemanticParse(analyzer, node.instance);
  node.instance.semantic = instanceSemantic;

  return invokeValueSemantic(analyzer.createReference(node), instanceSemantic?.type);
}
