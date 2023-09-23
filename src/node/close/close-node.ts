import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { NodeType, NonHiddenTokenNode } from '~/analysis/node';
import { Integer, String2 } from '~/lib/core';

export interface CloseNode extends NonHiddenTokenNode {
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
