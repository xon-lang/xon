import {Boolean2, Integer, nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, ExpressionNode, findNode, is, isExpressionNode} from '../../node';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {OperatorNode} from '../../token/operator/operator-node';
import {prefixNode} from './prefix-node';

export function prefixNodeParse(operators: String[], isLeftRecursive: Boolean2): SyntaxParseFn {
  return (context: SyntaxContext, index: Integer) => {
    const found = findNode(
      context.nodes,
      index,
      isLeftRecursive,
      (x, i, nodes): x is OperatorNode =>
        is<OperatorNode>(x, $Node.OPERATOR) &&
        operators.includes(x.text) &&
        (i === 0 || is<OperatorNode>(nodes[i - 1], $Node.OPERATOR)) &&
        isExpressionNode(nodes[i + 1]),
    );

    if (!found) {
      return nothing;
    }

    const value = context.nodes[found.index + 1] as ExpressionNode;
    const node = prefixNode(context, found.node, value);

    return {node, spliceIndex: found.index};
  };
}
