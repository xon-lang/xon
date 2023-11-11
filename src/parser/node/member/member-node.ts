import { IdNode } from '~/parser/node/id/id-node';
import { Node } from '~/parser/node/node';
import { clonePosition } from '~/parser/node/node-position';
import { OperatorNode } from '~/parser/node/operator/operator-node';
import { NodeType } from '../node-type';

export interface MemberNode extends Node {
  $: NodeType.MEMBER;
  operator: OperatorNode;
  instance: Node;
  id: IdNode;
}

export function memberNode(operator: OperatorNode, instance: Node, id: IdNode): MemberNode {
  return {
    $: NodeType.MEMBER,
    start: clonePosition(instance.start),
    stop: clonePosition(id.stop),
    operator,
    instance,
    id,
  };
}
