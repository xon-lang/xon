import { Integer, String2 } from '~/lib/core';
import { NonHiddenLexicalNode } from '~/parser/node/lexical-node';
import { NodeType } from '~/parser/node/node';
import { LexicalAnalysis } from '~/parser/parser';

export interface OpenNode extends NonHiddenLexicalNode {
  $: NodeType.OPEN;
}

export function openNode(start: Integer, stop: Integer, text: String2): OpenNode {
  return {
    $: NodeType.OPEN,
    hidden: [],
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
