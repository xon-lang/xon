import { is } from '~/compiler/parser/parser';
import { FloatNode } from '~/node/float/float-node';
import { IdNode } from '~/node/id/id-node';
import { IntegerNode } from '~/node/integer/integer-node';
import { MemberNode } from '~/node/member/member-node';
import { Node, NodeType } from '~/node/node';
import { OperatorNode } from '~/node/operator/operator-node';

export interface InfixNode extends Node {
  type: NodeType.INFIX | NodeType.FLOAT | NodeType.MEMBER;
  operator: OperatorNode;
  left: Node;
  right: Node;
}

export function infixNode(operator: OperatorNode, left: Node, right: Node): InfixNode | FloatNode | MemberNode {
  let type = NodeType.INFIX;

  if (
    operator.text === '.' &&
    is<IntegerNode>(left, NodeType.INTEGER) &&
    (is<IntegerNode>(right, NodeType.INTEGER) || is<IdNode>(right, NodeType.ID))
  ) {
    type = NodeType.FLOAT;
  } else if ((operator.text === '.' || operator.text === '::') && is<IdNode>(right, NodeType.ID)) {
    type = NodeType.MEMBER;
  }

  return {
    type,
    operator,
    left,
    right,
  };
}
