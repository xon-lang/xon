import { IdNode } from '~/node/lexical/id/id-node';
import { OperatorNode } from '~/node/lexical/operator/operator-node';
import { Node, NodeType } from '~/node/node';

export interface MemberNode extends Node {
  $: NodeType.MEMBER;
  operator: OperatorNode;
  instance: Node;
  id: IdNode;
}

export function memberNode(operator: OperatorNode, instance: Node, id: IdNode): MemberNode {
  return {
    $: NodeType.MEMBER,
    start: instance.start,
    stop: id.stop,
    operator,
    instance,
    id,
  };
}
