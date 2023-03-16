import { IdNode } from '~/node/id/id-node';
import { InfixNode } from '~/node/infix/infix-node';
import { NodeType, TokenNode } from '~/node/node';
import { OperatorNode } from '~/node/operator/operator-node';

export interface MemberNode extends InfixNode {
  type: NodeType.MEMBER;
  right: IdNode;
}

export function floatNode(operator: OperatorNode, left: TokenNode, right: IdNode): MemberNode {
  return {
    type: NodeType.MEMBER,
    operator,
    left,
    right,
  };
}
