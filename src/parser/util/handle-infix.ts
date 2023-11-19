import { IdNode } from '~/parser/node/id/id-node';
import { infixNode } from '~/parser/node/infix/infix-node';
import { memberNode } from '~/parser/node/member/member-node';
import { metaMemberNode } from '~/parser/node/meta-member/meta-member-node';
import { OperatorNode } from '~/parser/node/operator/operator-node';
import { MEMBER_TOKEN, META_MEMBER_TOKEN } from '~/parser/util/operators';
import { Node } from '../node/node';
import { NodeType } from '../node/node-type';
import { is } from './is';

export function handleInfix(operator: OperatorNode, left: Node, right: Node): Node {
  if (operator.text === MEMBER_TOKEN) {
    if (is<IdNode>(right, NodeType.ID)) {
      return memberNode(left, operator, right);
    }

    throw new Error('Not implemented');
  }

  if (operator.text === META_MEMBER_TOKEN) {
    if (is<IdNode>(right, NodeType.ID)) {
      return metaMemberNode(left, operator, right);
    }

    throw new Error('Not implemented');
  }

  return infixNode(operator, left, right);
}
