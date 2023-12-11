import { String2 } from '../../../lib/core';
import { TokenNode } from '../../../parser/node/token-node';
import { ParserContext } from '../../../parser/parser-context';
import { ARRAY_NODE_OPEN_CODE, GROUP_NODE_OPEN_CODE, OBJECT_NODE_OPEN_CODE } from '../../util/config';
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
  const code = source.characters[index];

  if (code === GROUP_NODE_OPEN_CODE || code === ARRAY_NODE_OPEN_CODE || code === OBJECT_NODE_OPEN_CODE) {
    return openNode(source.text[index]);
  }

  return null;
}
