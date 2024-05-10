import {Boolean2, Integer} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, ExpressionNode, findNode, is, isExpressionNode} from '../../node';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {OperatorNode} from '../../token/operator/operator-node';
import {postfixNode} from './postfix-node';

export function postfixNodeParse(operators: String[], isLeftRecursive: Boolean2): SyntaxParseFn {
  return (context: SyntaxContext, index: Integer) => {
    const found = findNode(
      context.nodes,
      index,
      isLeftRecursive,
      (x, i, nodes): x is OperatorNode =>
        is<OperatorNode>(x, $Node.OPERATOR) &&
        operators.includes(x.text) &&
        (i === nodes.length - 1 || is<OperatorNode>(nodes[i + 1], $Node.OPERATOR)) &&
        isExpressionNode(nodes[i - 1]),
    );

    if (!found) {
      return;
    }

    const value = context.nodes[found.index - 1] as ExpressionNode;
    const node = postfixNode(context, value, found.node);

    return {node, spliceIndex: found.index - 1};
  };
}
