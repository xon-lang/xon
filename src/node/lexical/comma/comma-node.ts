import { Integer, String2 } from '~/lib/core';
import { LexicalAnalysis } from '~/node/lexical/lexical-analysis';
import { NonHiddenLexicalNode } from '~/node/lexical/lexical-node';
import { NodeType } from '~/node/node';

export interface CommaNode extends NonHiddenLexicalNode {
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
