import { String2 } from '../../../lib/core';
import { ParserContext } from '../../../parser/parser-context';
import { SourceRange } from '../../../source/source-range';
import { ARRAY_NODE_CLOSE_CODE, GROUP_NODE_CLOSE_CODE, OBJECT_NODE_CLOSE_CODE } from '../../parser-config';
import { TokenNode } from '../node';
import { $Node } from '../node-type';

export interface CloseNode extends TokenNode {
  $: $Node.CLOSE;
}

export function closeNode(range: SourceRange, text: String2): CloseNode {
  return {
    $: $Node.CLOSE,
    range,
    text,
  };
}

export function scanCloseNode(context: ParserContext): CloseNode | null {
  const code = context.source.characters[context.position.index];

  if (code === GROUP_NODE_CLOSE_CODE || code === ARRAY_NODE_CLOSE_CODE || code === OBJECT_NODE_CLOSE_CODE) {
    const text = context.source.text[context.position.index];
    const range = context.getRange(1);

    return closeNode(range, text);
  }

  return null;
}
