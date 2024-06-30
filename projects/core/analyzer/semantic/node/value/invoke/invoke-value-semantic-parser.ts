import {Nothing, nothing} from '../../../../../../lib/types';
import {$Node, Node, is} from '../../../../node';
import {InvokeNode} from '../../../../syntax/node/invoke/invoke-node';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {valueSemanticParse} from '../value-semantic-parser';
import {InvokeValueSemantic, invokeValueSemantic} from './invoke-value-semantic';

export function invokeValueSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): InvokeValueSemantic | Nothing {
  if (!is<InvokeNode>(node, $Node.INVOKE)) {
    return nothing;
  }

  const instanceSemantic = valueSemanticParse(analyzer, node.instance);
  node.instance.semantic = instanceSemantic;

  return invokeValueSemantic(analyzer.createReference(node), instanceSemantic?.type);
}
