import { Integer, String2 } from '~/lib/core';
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

export function scanCommaNode(text: String2, index: Integer): CommaNode | null {
  if (text[index] === COMMA) {
    return commaNode(index, index, COMMA);
  }
  return null;
}
