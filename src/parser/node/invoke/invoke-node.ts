import { GroupNode } from '~/parser/node/group/group-node';
import { Node } from '~/parser/node/node';
import { NodeType } from '../node-type';

export interface InvokeNode extends Node {
  $: NodeType.INVOKE;
  instance: Node;
  group: GroupNode;
}

export function invokeNode(instance: Node, group: GroupNode): InvokeNode {
  return {
    $: NodeType.INVOKE,
    start: instance.start,
    stop: group.stop,
    instance,
    group,
  };
}
