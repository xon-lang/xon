import { NodeType, Token } from '~/analysis/node';
import { ArrayNode } from '~/analysis/syntax/node/array/array-node';

export interface InvokeNode extends Token {
  $: NodeType.INVOKE;
  instance: Token;
  array: ArrayNode;
}

export function invokeNode(instance: Token, array: ArrayNode): InvokeNode {
  return {
    $: NodeType.INVOKE,
    start: instance.start,
    stop: array.stop,
    instance,
    array,
  };
}
