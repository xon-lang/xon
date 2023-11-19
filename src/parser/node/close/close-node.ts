import { String2 } from '~/lib/core';
import { ARRAY_NODE_CLOSE } from '~/parser/node/array/array-node';
import { GROUP_NODE_CLOSE } from '~/parser/node/group/group-node';
import { OBJECT_NODE_CLOSE } from '~/parser/node/object/object-node';
import { ParserContext } from '~/parser/parser-context';
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

export function scanCloseNode({ index, source }: ParserContext): Partial<CloseNode> | null {
  const CLOSE = GROUP_NODE_CLOSE + OBJECT_NODE_CLOSE + ARRAY_NODE_CLOSE;

  if (CLOSE.includes(source.text[index])) {
    return closeNode(source.text[index]);
  }

  return null;
}
