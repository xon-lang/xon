import { String2 } from '~/lib/core';
import { ARRAY_NODE_OPEN } from '~/parser/node/array/array-node';
import { GROUP_NODE_OPEN } from '~/parser/node/group/group-node';
import { OBJECT_NODE_OPEN } from '~/parser/node/object/object-node';
import { TokenNode } from '~/parser/node/token-node';
import { Parser } from '~/parser/parser';
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

export function scanOpenNode({ text, index }: Parser): Partial<OpenNode> | null {
  const OPEN = GROUP_NODE_OPEN + OBJECT_NODE_OPEN + ARRAY_NODE_OPEN;

  if (OPEN.includes(text[index])) {
    return openNode(text[index]);
  }

  return null;
}
