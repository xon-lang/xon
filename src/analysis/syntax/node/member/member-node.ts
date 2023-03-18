import { IdNode } from '~/analysis/lexical/node/id/id-node';
import { OperatorNode } from '~/analysis/lexical/node/operator/operator-node';
import { Node, NodeType } from '~/analysis/node';

export interface MemberNode extends Node {
  $: NodeType.MEMBER;
  operator: OperatorNode;
  instance: Node;
  id: IdNode;
}

export function memberNode(operator: OperatorNode, instance: Node, id: IdNode): MemberNode {
  return {
    $: NodeType.MEMBER,
    operator,
    instance,
    id,
  };
}
