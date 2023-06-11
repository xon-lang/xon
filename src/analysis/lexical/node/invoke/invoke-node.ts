import { Node, NodeType } from '~/analysis/node';
import { ArrayNode } from '~/analysis/syntax/node/array/array-node';

export interface InvokeNode extends Node {
  $: NodeType.INVOKE;
  instance: Node;
  array: ArrayNode;
}

export function invokeNode(instance: Node, array: ArrayNode): InvokeNode {
  return {
    $: NodeType.INVOKE,
    start: instance.start,
    stop: array.stop,
    instance,
    array,
  };
}
