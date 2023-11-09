import { Integer, String2 } from '~/lib/core';
import { Parser } from '~/parser/parser';
import { TokenNode } from '../node';
import { NodeType } from '../node-type';

export interface NlNode extends TokenNode {
  $: NodeType.NL;
}

export function nlNode(start: Integer, stop: Integer, text: String2): NlNode {
  return {
    $: NodeType.NL,
    start,
    stop,
    hidden: [],
    text,
  };
}

const LF = '\n';
const CR = '\r';

export function scanNlNode({ text, index }: Parser): NlNode | null {
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
