import { Integer, String2 } from '~/lib/core';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

export interface OpenNode extends TokenNode {
  $: NodeType.OPEN;
}

export function openNode(start: Integer, stop: Integer, text: String2): OpenNode {
  return {
    $: NodeType.OPEN,
    hidden: [],
    start,
    stop,
    text,
  };
}
