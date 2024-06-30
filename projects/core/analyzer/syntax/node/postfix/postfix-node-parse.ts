import {Array2, Boolean2, Integer, nothing} from '../../../../../lib/types';
import {OperatorNode} from '../../../lexical/node/operator/operator-node';
import {$Node, is, isNonOperatorExpression, Node, nodeFindMap} from '../../../node';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {SyntaxAnalyzer} from '../../syntax-analyzer';
import {postfixNode} from './postfix-node';

export function postfixNodeParse(operators: String[], isLeftRecursive: Boolean2): SyntaxParseFn {
  return (analyzer: SyntaxAnalyzer, nodes: Array2<Node>, startIndex: Integer) => {
    return nodeFindMap(nodes, startIndex, isLeftRecursive, (node, index, nodes) => {
      if (
        !is<OperatorNode>(node, $Node.OPERATOR) ||
        !operators.includes(node.text) ||
        (index !== nodes.length - 1 && !is<OperatorNode>(nodes[index + 1], $Node.OPERATOR))
      ) {
        return nothing;
      }

      const value = nodes[index - 1];

      if (!isNonOperatorExpression(value)) {
        return nothing;
      }

      return {node: postfixNode(analyzer, value, node), index: index - 1};
    });
  };
}
