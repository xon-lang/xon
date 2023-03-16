import { Char, Integer, String2 } from '~/lib/core';
import { NodeType, TokenNode } from '~/node/node';

export interface CommaNode extends TokenNode {
  type: NodeType.COMMA;
}

export function commaNode(start: Integer, stop: Integer, text: String2): CommaNode {
  return {
    type: NodeType.COMMA,
    start,
    stop,
    text,
  };
}

const COMMA = ',';

export function scanCommaNode(chars: Char[], index: Integer): CommaNode | null {
  if (chars[index] === COMMA) {
    return commaNode(index, index, COMMA);
  }
  return null;
}
