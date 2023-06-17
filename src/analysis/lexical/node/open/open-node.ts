import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { NodeType, Token } from '~/analysis/node';
import { Integer, String2 } from '~/lib/core';

export interface OpenNode extends Token {
  $: NodeType.OPEN;
}

export function openNode(start: Integer, stop: Integer, text: String2): OpenNode {
  return {
    $: NodeType.OPEN,
    start,
    stop,
    text,
  };
}

const OPEN = '([{';

export function scanOpenNode({ text, index }: LexicalAnalysis): OpenNode | null {
  if (OPEN.includes(text[index])) {
    return openNode(index, index, text[index]);
  }

  return null;
}
