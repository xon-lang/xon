import { String2 } from '~/lib/core';
import { Parser } from '~/parser/parser';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

export interface UnknownNode extends TokenNode {
  $: NodeType.UNKNOWN;
}

export function unknownNode(text: String2): Partial<UnknownNode> {
  return {
    $: NodeType.UNKNOWN,
    text,
  };
}

export function scanUnknownNode({ index, text }: Parser): Partial<UnknownNode> | null {
  return unknownNode(text[index]);
}
