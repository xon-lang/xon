import { String2 } from '~/lib/core';
import { TokenNode } from '~/parser/node/token-node';
import { ParserContext } from '~/parser/parser-context';
import { ARRAY_NODE_OPEN, GROUP_NODE_OPEN, OBJECT_NODE_OPEN } from '~/parser/util/operators';
import { NodeType } from '../node-type';

export interface OpenNode extends TokenNode {
  $: NodeType.OPEN;
}

export function openNode(text: String2): Partial<OpenNode> {
  return {
    $: NodeType.OPEN,
    text,
  };
}

export function scanOpenNode({ source, index }: ParserContext): Partial<OpenNode> | null {
  const OPEN = GROUP_NODE_OPEN + OBJECT_NODE_OPEN + ARRAY_NODE_OPEN;

  if (OPEN.includes(source.text[index])) {
    return openNode(source.text[index]);
  }

  return null;
}
