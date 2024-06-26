import {Boolean2, Integer, nothing} from '../../../../../lib/types';
import {OperatorNode} from '../../../lexical/node/operator/operator-node';
import {$Node, is, isNonOperatorExpression, nodeFindMap} from '../../../node';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {SyntaxContext} from '../../syntax-context';
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
