import { Node, NodeType } from '~/analysis/node';
import { ArrayNode } from '~/analysis/syntax/node/array/array-node';

export interface InvokeNode extends Node {
  type: NodeType.INVOKE;
  instance: Node;
  array: ArrayNode;
}

export function invokeNode(instance: Node, array: ArrayNode): InvokeNode {
  return {
    type: NodeType.INVOKE,
    instance,
    array,
  };
}
