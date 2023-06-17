import { IdNode } from '~/analysis/lexical/node/id/id-node';
import { OperatorNode } from '~/analysis/lexical/node/operator/operator-node';
import { NodeType, Token } from '~/analysis/node';

export interface MemberNode extends Token {
  $: NodeType.MEMBER;
  operator: OperatorNode;
  instance: Token;
  id: IdNode;
}

export function memberNode(operator: OperatorNode, instance: Token, id: IdNode): MemberNode {
  return {
    $: NodeType.MEMBER,
    start: instance.start,
    stop: id.stop,
    operator,
    instance,
    id,
  };
}
