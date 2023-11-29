import { String2 } from '~/lib/core';
import { ParserContext } from '~/parser/parser-context';
import { ARRAY_NODE_CLOSE_CODE, GROUP_NODE_CLOSE_CODE, OBJECT_NODE_CLOSE_CODE } from '~/parser/util/operators';
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
  const code = source.characters[index];

  if (code === GROUP_NODE_CLOSE_CODE || code === ARRAY_NODE_CLOSE_CODE || code === OBJECT_NODE_CLOSE_CODE) {
    return closeNode(source.text[index]);
  }

  return null;
}
