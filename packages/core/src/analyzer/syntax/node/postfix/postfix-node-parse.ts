import {$, is, isNonOperatorExpression} from '../../../../$';
import {Boolean2, Integer, nothing} from '../../../../../../lib/src/types';
import {Node, nodeFindMap} from '../../../node';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {SyntaxAnalyzer} from '../../syntax-analyzer';
import {postfixNode} from './postfix-node';

export function postfixNodeParse(operators: String[], isLeftRecursive: Boolean2): SyntaxParseFn {
  return (analyzer: SyntaxAnalyzer, nodes: Node[], startIndex: Integer) => {
    return nodeFindMap(nodes, startIndex, isLeftRecursive, (node, index, nodes) => {
      if (
        !is(node, $.OperatorNode) ||
        !operators.includes(node.text.toString()) ||
        (index !== nodes.length - 1 && !is(nodes[index + 1], $.OperatorNode))
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
