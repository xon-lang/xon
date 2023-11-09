import { GroupNode } from '~/parser/node/group/group-node';
import { SyntacticNode } from '~/parser/node/lexical-node';
import { Node } from '~/parser/node/node';
import { NodeType } from '../node-type';

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
