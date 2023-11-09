import { Integer, String2 } from '~/lib/core';
import { NonHiddenLexicalNode } from '~/parser/node/lexical-node';
import { LexicalAnalysis } from '~/parser/parser';
import { NodeType } from '../node-type';

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
