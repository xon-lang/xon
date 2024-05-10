import {Boolean2, Integer} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, ExpressionNode, findNode, is, isExpressionNode} from '../../node';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {OperatorNode} from '../../token/operator/operator-node';
import {infixNode} from './infix-node';

export function infixNodeParse(operators: String[], isLeftRecursive: Boolean2): SyntaxParseFn {
  return (context: SyntaxContext, index: Integer) => {
    const found = findNode(
      context.nodes,
      index,
      isLeftRecursive,
      (x, i, nodes): x is OperatorNode =>
        is<OperatorNode>(x, $Node.OPERATOR) &&
        operators.includes(x.text) &&
        isExpressionNode(nodes[i - 1]) &&
        isExpressionNode(nodes[i + 1]),
    );

    if (!found) {
      return;
    }

    const left = context.nodes[found.index - 1] as ExpressionNode;
    const right = context.nodes[found.index + 1] as ExpressionNode;
    const node = infixNode(context, left, found.node, right);

    return {node, spliceIndex: found.index - 1};
  };
}
