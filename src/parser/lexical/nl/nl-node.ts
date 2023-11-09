import { Integer, String2 } from '~/lib/core';
import { HiddenLexicalNode } from '~/parser/lexical/lexical-node';
import { NodeType } from '~/parser/lexical/node';
import { LexicalAnalysis } from '~/parser/parser';

export interface NlNode extends HiddenLexicalNode {
  $: NodeType.NL;
}

export function nlNode(start: Integer, stop: Integer, text: String2): NlNode {
  return {
    $: NodeType.NL,
    start,
    stop,
    text,
  };
}

const LF = '\n';
const CR = '\r';

export function scanNlNode({ text, index }: LexicalAnalysis): NlNode | null {
  if (text[index] === LF) {
    return nlNode(index, index, LF);
  }

  if (text[index] === CR) {
    if (text[index + 1] === LF) {
      return nlNode(index, index + 1, CR + LF);
    }

    return nlNode(index, index, CR);
  }

  return null;
}
