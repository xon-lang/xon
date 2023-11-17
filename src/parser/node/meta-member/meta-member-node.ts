import { IdNode } from '~/parser/node/id/id-node';
import { Node } from '~/parser/node/node';
import { clonePosition } from '~/parser/node/node-position';
import { OperatorNode } from '~/parser/node/operator/operator-node';
import { NodeType } from '../node-type';

export interface MetaMemberNode extends Node {
  $: NodeType.META_MEMBER;
  operator: OperatorNode;
  instance: Node;
  id: IdNode;
}

export function metaMemberNode(operator: OperatorNode, instance: Node, id: IdNode): MetaMemberNode {
  return {
    $: NodeType.META_MEMBER,
    start: clonePosition(instance.start),
    stop: clonePosition(id.stop),
    operator,
    instance,
    id,
  };
}
