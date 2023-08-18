import { GroupNode } from '~/analysis/lexical/node/group/group-node';
import { Node, NodeType } from '~/analysis/node';

export interface InvokeNode extends Node {
  $: NodeType.INVOKE;
  instance: Node;
  group: GroupNode;
}

export function invokeNode(instance: Node, group: GroupNode): InvokeNode {
  return {
    $: NodeType.INVOKE,
    hidden: [],
    start: instance.start,
    stop: group.stop,
    instance,
    group,
  };
}
