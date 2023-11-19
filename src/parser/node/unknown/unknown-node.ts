import { String2 } from '~/lib/core';
import { ParserContext } from '~/parser/parser-context';
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

export function scanUnknownNode({ index, source }: ParserContext): Partial<UnknownNode> | null {
  return unknownNode(source.text[index]);
}
