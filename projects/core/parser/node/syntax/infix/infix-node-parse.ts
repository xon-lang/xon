import {Integer, nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {SyntaxParseFn} from '../../../util/statement-collapse';
import {$Node, findNode, is} from '../../node';
import {OperatorNode} from '../../token/operator/operator-node';
import {infixNode} from './infix-node';

export function infixNodeParse(operators: String[]): SyntaxParseFn {
  return (context: SyntaxContext, startIndex: Integer) => {
    const found = findNode(
      context.nodes,
      startIndex,
      true,
      (x): x is OperatorNode => is<OperatorNode>(x, $Node.OPERATOR) && operators.includes(x.text),
    );

    if (!found) {
      return;
    }

    const left = context.nodes[found.index - 1];
    const right = context.nodes[found.index + 1];

    if (!left || !right || is<OperatorNode>(left, $Node.OPERATOR) || is<OperatorNode>(right, $Node.OPERATOR)) {
      return nothing;
    }

    const node = infixNode(context, left, found.node, right);

    return {node, spliceIndex: found.index - 1};
  };
}
