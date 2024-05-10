import {Integer, nothing} from '../../../../lib/core';
import {ASSIGN} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, ExpressionNode, findNode, is, isExpressionNode} from '../../node';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {IdNode} from '../../token/id/id-node';
import {OperatorNode} from '../../token/operator/operator-node';
import {prefixNode} from '../prefix/prefix-node';
import {assignmentNode} from './assignment-node';

export function assignmentNodeParse(): SyntaxParseFn {
  return (context: SyntaxContext, index: Integer) => {
    const found = findNode(
      context.nodes,
      index,
      true,
      (x, index, nodes): x is OperatorNode =>
        is<OperatorNode>(x, $Node.OPERATOR) &&
        x.text === ASSIGN &&
        is<IdNode>(nodes[index - 1], $Node.ID) &&
        isExpressionNode(nodes[index + 1]),
    );

    if (!found) {
      return nothing;
    }

    const id = context.nodes[found.index - 1] as IdNode;
    const value = context.nodes[found.index + 1] as ExpressionNode;
    const assign = prefixNode(context, found.node, value);
    const node = assignmentNode(context, id, assign);

    return {node, spliceIndex: found.index - 1, deleteCount: 3};
  };
}
