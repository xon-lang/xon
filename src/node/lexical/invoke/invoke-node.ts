import { GroupNode } from '~/node/lexical/group/group-node';
import { SyntacticNode } from '~/node/lexical/lexical-node';
import { Node, NodeType } from '~/node/node';

export interface InvokeNode extends SyntacticNode {
  $: NodeType.INVOKE;
  instance: Node;
  group: GroupNode;
}

export function invokeNode(instance: SyntacticNode, group: GroupNode): InvokeNode {
  return {
    $: NodeType.INVOKE,
    start: instance.start,
    stop: group.stop,
    instance,
    group,
  };
}
