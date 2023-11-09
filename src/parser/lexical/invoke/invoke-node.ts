import { GroupNode } from '~/parser/lexical/group/group-node';
import { SyntacticNode } from '~/parser/lexical/lexical-node';
import { Node, NodeType } from '~/parser/lexical/node';

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
