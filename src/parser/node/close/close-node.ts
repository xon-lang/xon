import { Integer, String2 } from '~/lib/core';
import { TokenNode } from '../node';
import { NodeType } from '../node-type';

export interface CloseNode extends TokenNode {
  $: NodeType.CLOSE;
}

export function closeNode(start: Integer, stop: Integer, text: String2): CloseNode {
  return {
    $: NodeType.CLOSE,
    hidden: [],
    start,
    stop,
    text,
  };
}
