import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { Integer, String2 } from '~/lib/core';
import { NonHiddenLexicalNode } from '~/node/lexical/lexical-node';
import { NodeType } from '~/node/node';

export interface CloseNode extends NonHiddenLexicalNode {
  $: NodeType.CLOSE;
}

export function closeNode(start: Integer, stop: Integer, text: String2): CloseNode {
  return {
    $: NodeType.CLOSE,
    hidden: [],
    start,
    stop,
    text,
  };
}

const CLOSE = '}])';

export function scanCloseNode({ text, index }: LexicalAnalysis): CloseNode | null {
  if (CLOSE.includes(text[index])) {
    return closeNode(index, index, text[index]);
  }

  return null;
}
