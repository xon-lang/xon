import { ArrayNode } from '~/parser/node/array/array-node';
import { GroupNode } from '~/parser/node/group/group-node';
import { Node } from '~/parser/node/node';
import { ObjectNode } from '~/parser/node/object/object-node';
import { NodeType } from '../node-type';

export interface InvokeNode extends Node {
  $: NodeType.INVOKE;
  instance: Node;
  group: GroupNode | ObjectNode | ArrayNode;
}

export function invokeNode(instance: Node, group: GroupNode | ObjectNode | ArrayNode): InvokeNode {
  return {
    $: NodeType.INVOKE,
    start: instance.start,
    stop: group.stop,
    hidden: [],
    instance,
    group,
  };
}
