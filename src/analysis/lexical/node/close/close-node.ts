import { LexicalNode } from '~/analysis/lexical/lexical-node';
import { NodeType } from '~/analysis/node';
import { Integer, String2 } from '~/lib/core';

export interface CloseNode extends LexicalNode {
  $: NodeType.CLOSE;
}

export function closeNode(start: Integer, stop: Integer, text: String2): CloseNode {
  return {
    $: NodeType.CLOSE,
    start,
    stop,
    text,
  };
}

const CLOSE = '}])';

export function scanCloseNode(text: String2, index: Integer): CloseNode | null {
  if (CLOSE.includes(text[index])) {
    return closeNode(index, index, text[index]);
  }
  return null;
}
