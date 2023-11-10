import { Integer, String2 } from '~/lib/core';
import { Parser } from '~/parser/parser';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

export interface UnknownNode extends TokenNode {
  $: NodeType.UNKNOWN;
}

export function unknownNode(start: Integer, stop: Integer, text: String2): UnknownNode {
  return {
    $: NodeType.UNKNOWN,
    start,
    stop,
    text,
  };
}

export function scanUnknownNode({ text, index }: Parser): UnknownNode | null {
  return unknownNode(index, index, text[index]);
}
