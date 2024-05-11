import {Integer, nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, ExpressionNode, findNode, is, isExpressionNode} from '../../node';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {IdNode} from '../../token/id/id-node';
import {OperatorNode} from '../../token/operator/operator-node';
import {memberNode} from './member-node';

export function memberNodeParse(operators: String[]): SyntaxParseFn {
  return (context: SyntaxContext, index: Integer) => {
    const found = findNode(
      context.nodes,
      index,
      true,
      (x, i, nodes): x is OperatorNode =>
        is<OperatorNode>(x, $Node.OPERATOR) && operators.includes(x.text) && isExpressionNode(nodes[i - 1]),
    );

    if (!found) {
      return;
    }

    const instance = context.nodes[found.index - 1] as ExpressionNode;
    const right = context.nodes[found.index + 1];
    const id = is<IdNode>(right, $Node.ID) ? right : nothing;
    const node = memberNode(context, instance, found.node, id);

    return {node, spliceIndex: found.index - 1};
  };
}
