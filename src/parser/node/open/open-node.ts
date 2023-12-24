import { String2 } from '../../../lib/core';
import { TokenNode } from '../../../parser/node/token-node';
import { ParserContext } from '../../../parser/parser-context';
import { SourceRange } from '../../../source/source-range';
import { ARRAY_NODE_OPEN_CODE, GROUP_NODE_OPEN_CODE, OBJECT_NODE_OPEN_CODE } from '../../parser-config';
import { NodeType } from '../node-type';

export interface OpenNode extends TokenNode {
  $: NodeType.OPEN;
}

export function openNode(range: SourceRange, text: String2): OpenNode {
  return {
    $: NodeType.OPEN,
    range,
    text,
  };
}

export function scanOpenNode(context: ParserContext): Partial<OpenNode> | null {
  const code = context.source.characters[context.position.index];

  if (code === GROUP_NODE_OPEN_CODE || code === ARRAY_NODE_OPEN_CODE || code === OBJECT_NODE_OPEN_CODE) {
    const text = context.source.text[context.position.index];
    const range = context.getRange(text.length);

    return openNode(range, text);
  }

  return null;
}
