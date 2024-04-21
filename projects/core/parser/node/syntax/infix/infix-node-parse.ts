import {Integer, nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {SyntaxParseFn} from '../../../util/statement-collapse';
import {$Node, findNode, is, isExpressionNode} from '../../node';
import {OperatorNode} from '../../token/operator/operator-node';
import {infixNode} from './infix-node';

export function infixNodeParse(operators: String[]): SyntaxParseFn {
  return (context: SyntaxContext, index: Integer) => {
    const found = findNode(
      context.nodes,
      index,
      true,
      (x): x is OperatorNode => is<OperatorNode>(x, $Node.OPERATOR) && operators.includes(x.text),
    );

    if (!found) {
      return;
    }

    const left = context.nodes[found.index - 1];
    const right = context.nodes[found.index + 1];

    if (!isExpressionNode(left) || !isExpressionNode(right)) {
      return nothing;
    }

    const node = infixNode(context, left, found.node, right);

    return {node, spliceIndex: found.index - 1};
  };
}
