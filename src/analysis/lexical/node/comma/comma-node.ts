import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { NodeType, Token } from '~/analysis/node';
import { Integer, String2 } from '~/lib/core';

export interface CommaNode extends Token {
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

export function scanCommaNode({ text, index }: LexicalAnalysis): CommaNode | null {
  if (text[index] === COMMA) {
    return commaNode(index, index, COMMA);
  }

  return null;
}
