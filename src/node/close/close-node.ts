import { Char, Integer, String2 } from '~/lib/core';
import { NodeType, TokenNode } from '~/node/node';

export interface CloseNode extends TokenNode {
  type: NodeType.CLOSE;
}

export function closeNode(start: Integer, stop: Integer, text: String2): CloseNode {
  return {
    type: NodeType.CLOSE,
    start,
    stop,
    text,
  };
}

const CLOSE = '}])';

export function scanCloseNode(chars: Char[], index: Integer): CloseNode | null {
  if (CLOSE.includes(chars[index])) {
    return closeNode(index, index, chars[index]);
  }
  return null;
}
