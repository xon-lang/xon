import { Char, Integer, String2 } from '~/lib/core';
import { NodeType, TokenNode } from '~/node/node';

export interface OpenNode extends TokenNode {
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

export function scanOpenNode(chars: Char[], index: Integer): OpenNode | null {
  if (OPEN.includes(chars[index])) {
    return openNode(index, index, chars[index]);
  }
  return null;
}
