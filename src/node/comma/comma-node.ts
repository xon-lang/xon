import { Source } from '~/compiler/source/source';
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

export function scanCommaNode(source: Source, start: Integer, stop: Integer): CommaNode | null {
  if (source.text[start] === COMMA) {
    return commaNode(start, start, COMMA);
  }
  return null;
}
