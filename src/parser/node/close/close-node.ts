import { String2 } from '~/lib/core';
import { ParserContext } from '~/parser/parser-context';
import { ARRAY_NODE_CLOSE, GROUP_NODE_CLOSE, OBJECT_NODE_CLOSE } from '~/parser/util/operators';
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
