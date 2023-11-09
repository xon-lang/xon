import { IdNode } from '~/node/lexical/id/id-node';
import { InfixNode, infixNode } from '~/node/lexical/infix/infix-node';
import { SyntacticNode } from '~/node/lexical/lexical-node';
import { MemberNode, memberNode } from '~/node/lexical/member/member-node';
import { OperatorNode } from '~/node/lexical/operator/operator-node';
import { NodeType, is } from '~/node/node';

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
