import { IdNode } from '~/parser/node/id/id-node';
import { InfixNode, infixNode } from '~/parser/node/infix/infix-node';
import { MemberNode, memberNode } from '~/parser/node/member/member-node';
import { OperatorNode } from '~/parser/node/operator/operator-node';
import { SyntacticNode } from '../node/node';
import { NodeType } from '../node/node-type';
import { is } from './is';

export function handleInfix(operator: OperatorNode, left: SyntacticNode, right: SyntacticNode): InfixNode | MemberNode {
  // fix complex condition
  if (operator.text === '.' || operator.text === '::') {
    if (is<IdNode>(right, NodeType.ID)) {
      return memberNode(operator, left, right);
    }
    throw new Error('Not implemented');
  }

  return infixNode(operator, left, right);
}
