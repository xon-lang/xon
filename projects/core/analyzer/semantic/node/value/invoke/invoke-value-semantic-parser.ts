import {Nothing, nothing} from '../../../../../../lib/types';
import {$Node, Node, is} from '../../../../node';
import {InvokeNode} from '../../../../syntax/node/invoke/invoke-node';
import {SemanticAnalyzerContext} from '../../../semantic-analyzer-context';
import {valueSemanticParse} from '../value-semantic-parser';
import {InvokeValueSemantic, invokeValueSemantic} from './invoke-value-semantic';

export function invokeValueSemanticTryParse(
  context: SemanticAnalyzerContext,
  node: Node,
): InvokeValueSemantic | Nothing {
  if (!is<InvokeNode>(node, $Node.INVOKE)) {
    return nothing;
  }

  const instanceSemantic = valueSemanticParse(context, node.instance);
  node.instance.semantic = instanceSemantic;

  return invokeValueSemantic(context.createReference(node), instanceSemantic?.type);
}
