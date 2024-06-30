import {Array2, Boolean2, Integer, nothing} from '../../../../../lib/types';
import {OperatorNode} from '../../../lexical/node/operator/operator-node';
import {$Node, is, isNonOperatorExpression, Node, nodeFindMap} from '../../../node';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {SyntaxAnalyzer} from '../../syntax-analyzer';
import {infixNode} from './infix-node';

export function infixNodeParse(operators: String[], isLeftRecursive: Boolean2): SyntaxParseFn {
  return (analyzer: SyntaxAnalyzer, nodes: Array2<Node>, startIndex: Integer) => {
    return nodeFindMap(nodes, startIndex, isLeftRecursive, (node, index, nodes) => {
      if (!is<OperatorNode>(node, $Node.OPERATOR) || !operators.includes(node.text)) {
        return nothing;
      }

      const left = nodes[index - 1];
      const right = nodes[index + 1];

      if (!isNonOperatorExpression(left) || !isNonOperatorExpression(right)) {
        return nothing;
      }

      return {node: infixNode(analyzer, left, node, right), index: index - 1};
    });
  };
}
