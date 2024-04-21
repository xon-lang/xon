import {Integer, nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {SyntaxParseFn} from '../../../util/statement-collapse';
import {$Node, findNode, is} from '../../node';
import {OperatorNode} from '../../token/operator/operator-node';
import {postfixNode} from './postfix-node';

export function postfixNodeParse(operators: String[]): SyntaxParseFn {
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

    const lastIndex = context.nodes.length - 1;
    const left = context.nodes[found.index - 1];
    const right = context.nodes[found.index + 1];

    if (
      !left ||
      is<OperatorNode>(left, $Node.OPERATOR) ||
      !(found.index === lastIndex || is<OperatorNode>(right, $Node.OPERATOR))
    ) {
      return nothing;
    }

    const node = postfixNode(context, left, found.node);

    return {node, spliceIndex: found.index - 1};
  };
}
