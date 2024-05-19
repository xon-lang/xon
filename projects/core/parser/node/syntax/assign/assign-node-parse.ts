import {Integer, nothing} from '../../../../../lib/types';
import {ASSIGN} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, is, isExpressionNode, nodeFindMap} from '../../node';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {OperatorNode} from '../../token/operator/operator-node';
import {assignNode} from './assign-node';

function assignNodeParse(): SyntaxParseFn {
  return (context: SyntaxContext, startIndex: Integer) => {
    return nodeFindMap(context.nodes, startIndex, false, (node, index, nodes) => {
      if (
        !is<OperatorNode>(node, $Node.OPERATOR) ||
        node.text !== ASSIGN ||
        (index !== 0 && !is<OperatorNode>(nodes[index - 1], $Node.OPERATOR))
      ) {
        return nothing;
      }

      const value = nodes[index + 1];

      if (!isExpressionNode(value)) {
        return nothing;
      }

      return {node: assignNode(context, node, value), index: index};
    });
  };
}
