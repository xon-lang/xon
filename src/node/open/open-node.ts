import { LexicalNode, NodeType } from '~/analysis/node';
import { Integer, String2 } from '~/lib/core';

export interface OpenNode extends LexicalNode {
  type: NodeType.OPEN;
}

export function openNode(start: Integer, stop: Integer, text: String2): OpenNode {
  return {
    type: NodeType.OPEN,
    start,
    stop,
    text,
  };
}

const OPEN = '([{';

export function scanOpenNode(text: String2, index: Integer): OpenNode | null {
  if (OPEN.includes(text[index])) {
    return openNode(index, index, text[index]);
  }
  return null;
}
