import { Integer, String2 } from '~/lib/core';
import { Parser } from '~/parser/parser';
import { TokenNode } from '../node';
import { NodeType } from '../node-type';

export interface CommaNode extends TokenNode {
  $: NodeType.COMMA;
}

export function commaNode(start: Integer, stop: Integer, text: String2): CommaNode {
  return {
    $: NodeType.COMMA,
    hidden: [],
    start,
    stop,
    text,
  };
}

const COMMA = ',';

export function scanCommaNode({ text, index }: Parser): CommaNode | null {
  if (text[index] === COMMA) {
    return commaNode(index, index, COMMA);
  }

  return null;
}
