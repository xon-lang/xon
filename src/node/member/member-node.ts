import { Node, NodeType } from '~/analysis/node';
import { IdNode } from '~/node/id/id-node';
import { OperatorNode } from '~/node/operator/operator-node';

export interface MemberNode extends Node {
  $: NodeType.MEMBER;
  operator: OperatorNode;
  instance: Node;
  id: IdNode;
}

export function memberNode(operator: OperatorNode, instance: Node, id: IdNode): MemberNode {
  return {
    $: NodeType.MEMBER,
    hidden: [],
    start: instance.start,
    stop: id.stop,
    operator,
    instance,
    id,
  };
}
