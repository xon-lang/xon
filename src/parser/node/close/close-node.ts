import { String2 } from '~/lib/core';
import { ARRAY_NODE_CLOSE } from '~/parser/node/array/array-node';
import { GROUP_NODE_CLOSE } from '~/parser/node/group/group-node';
import { OBJECT_NODE_CLOSE } from '~/parser/node/object/object-node';
import { Parser } from '~/parser/parser';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

export interface CloseNode extends TokenNode {
  $: NodeType.CLOSE;
}

export function closeNode(text: String2): Partial<CloseNode> {
  return {
    $: NodeType.CLOSE,
    text,
  };
}

export function scanCloseNode({ index, text }: Parser): Partial<CloseNode> | null {
  const CLOSE = GROUP_NODE_CLOSE + OBJECT_NODE_CLOSE + ARRAY_NODE_CLOSE;

  if (CLOSE.includes(text[index])) {
    return closeNode(text[index]);
  }

  return null;
}
