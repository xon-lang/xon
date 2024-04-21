import {Integer, nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {SyntaxParseFn} from '../../../util/statement-collapse';
import {$Node, findNode, is} from '../../node';
import {OperatorNode} from '../../token/operator/operator-node';
import {prefixNode} from './prefix-node';

export function prefixNodeParse(operators: String[], isLeftRecursive = true): SyntaxParseFn {
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

    const left = context.nodes[found.index - 1];
    const right = context.nodes[found.index + 1];

    if (
      !right ||
      is<OperatorNode>(right, $Node.OPERATOR) ||
      !(found.index === 0 || is<OperatorNode>(left, $Node.OPERATOR))
    ) {
      return nothing;
    }

    const node = prefixNode(context, found.node, right);

    return {node, spliceIndex: found.index};
  };
}
