import {Boolean2, Integer, nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, findNode, is, isExpressionNode} from '../../node';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {OperatorNode} from '../../token/operator/operator-node';
import {postfixNode} from './postfix-node';

export function postfixNodeParse(operators: String[], isLeftRecursive: Boolean2): SyntaxParseFn {
  return (context: SyntaxContext, index: Integer) => {
    const found = findNode(
      context.nodes,
      index,
      isLeftRecursive,
      (x): x is OperatorNode => is<OperatorNode>(x, $Node.OPERATOR) && operators.includes(x.text),
    );

    if (!found) {
      return;
    }

    const lastIndex = context.nodes.length - 1;
    const left = context.nodes[found.index - 1];
    const right = context.nodes[found.index + 1];

    if (!(found.index === lastIndex || is<OperatorNode>(right, $Node.OPERATOR)) || !isExpressionNode(left)) {
      return nothing;
    }

    const node = postfixNode(context, left, found.node);

    return {node, spliceIndex: found.index - 1};
  };
}
