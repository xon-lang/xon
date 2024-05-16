import {Integer, nothing} from '../../../../../lib/types';
import {SyntaxContext} from '../../../syntax-context';
import {isExpressionNode, isGroupNode, nodeFindMap} from '../../node';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {invokeNode} from './invoke-node';

export function invokeNodeParse(): SyntaxParseFn {
  return (context: SyntaxContext, startIndex: Integer) => {
    return nodeFindMap(context.nodes, startIndex, true, (node, index, nodes) => {
      if (index === 0 || !isGroupNode(node)) {
        return nothing;
      }

      const instance = nodes[index - 1];

      if (!isExpressionNode(instance)) {
        return nothing;
      }

      return {node: invokeNode(context, instance, node), index: index - 1};
    });
  };
}
