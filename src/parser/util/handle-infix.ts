import { IdNode } from '~/parser/lexical/id/id-node';
import { InfixNode, infixNode } from '~/parser/lexical/infix/infix-node';
import { SyntacticNode } from '~/parser/lexical/lexical-node';
import { MemberNode, memberNode } from '~/parser/lexical/member/member-node';
import { NodeType, is } from '~/parser/lexical/node';
import { OperatorNode } from '~/parser/lexical/operator/operator-node';

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
