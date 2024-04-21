import {Integer, nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {SyntaxParseFn} from '../../../util/statement-collapse';
import {$Node, findNode, is} from '../../node';
import {IdNode} from '../../token/id/id-node';
import {OperatorNode} from '../../token/operator/operator-node';
import {memberNode} from './member-node';

export function memberNodeParse(operators: String[]): SyntaxParseFn {
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

    if (!left || is<OperatorNode>(left, $Node.OPERATOR)) {
      return nothing;
    }

    const id = is<IdNode>(right, $Node.ID) ? right : nothing;
    const node = memberNode(context, found.node, left, id);

    return {node, spliceIndex: found.index - 1};
  };
}
