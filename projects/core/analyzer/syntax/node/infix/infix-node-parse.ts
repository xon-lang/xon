import {$, is, isNonOperatorExpression} from '../../../../$';
import {Array2, Boolean2, Integer, nothing} from '../../../../../lib/types';
import {Node, nodeFindMap} from '../../../node';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {SyntaxAnalyzer} from '../../syntax-analyzer';
import {infixNode} from './infix-node';

export function infixNodeParse(operators: String[], isLeftRecursive: Boolean2): SyntaxParseFn {
  return (analyzer: SyntaxAnalyzer, nodes: Array2<Node>, startIndex: Integer) => {
    return nodeFindMap(nodes, startIndex, isLeftRecursive, (node, index, nodes) => {
      if (!is(node, $.OperatorNode) || !operators.includes(node.text)) {
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
