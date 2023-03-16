import { ArrayNode } from '~/node/array/array-node';
import { Node, NodeType } from '~/node/node';

export interface InvokeNode extends Node {
  instance: Node;
  array: ArrayNode;
}

export function invokeNode(instance: Node, array: ArrayNode): InvokeNode {
  return {
    type: NodeType.INVOKE,
    start: instance.start,
    stop: array.stop,
    instance,
    array,
  };
}
