import { Node, NodeType } from '~/node/node';
import { GroupNode } from '~/node/syntactic/group/group-node';

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
