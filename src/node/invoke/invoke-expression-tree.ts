import { ArrayNode } from '~/node/array/array-expression-tree';
import { Node, NodeType } from '~/node/node';

export interface InvokeNode extends Node {
  instance: Node;
  array: ArrayNode;
}

export function invokeNode(instance: Node, array: ArrayNode): InvokeNode {
  return {
    nodeType: NodeType.INVOKE,
    startIndex: instance.startIndex,
    stopIndex: array.stopIndex,
    text: instance.text,
    instance,
    array,
  };
}
