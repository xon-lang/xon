import { LexicalNode } from '~/analysis/lexical/lexical-node';
import { NodeType } from '~/analysis/node';
import { Integer, String2 } from '~/lib/core';

export interface CommaNode extends LexicalNode {
  $: NodeType.COMMA;
}

export function commaNode(start: Integer, stop: Integer, text: String2): CommaNode {
  return {
    $: NodeType.COMMA,
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
