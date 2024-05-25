import {Boolean2, Integer, nothing} from '../../../../../lib/types';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, is, isNonOperatorExpression, nodeFindMap} from '../../node';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {OperatorNode} from '../../token/operator/operator-node';
import {infixNode} from './infix-node';

export function infixNodeParse(operators: String[], isLeftRecursive: Boolean2): SyntaxParseFn {
  return (context: SyntaxContext, startIndex: Integer) => {
    return nodeFindMap(context.nodes, startIndex, isLeftRecursive, (node, index, nodes) => {
      if (!is<OperatorNode>(node, $Node.OPERATOR) || !operators.includes(node.text)) {
        return nothing;
      }

      const left = nodes[index - 1];
      const right = nodes[index + 1];

      if (!isNonOperatorExpression(left) || !isNonOperatorExpression(right)) {
        return nothing;
      }

      return {node: infixNode(context, left, node, right), index: index - 1};
    });
  };
}
