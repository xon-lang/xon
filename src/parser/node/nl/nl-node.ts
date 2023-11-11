import { String2 } from '~/lib/core';
import { Parser } from '~/parser/parser';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

export interface NlNode extends TokenNode {
  $: NodeType.NL;
}

export function nlNode(text: String2): Partial<NlNode> {
  return {
    $: NodeType.NL,
    text,
  };
}

const CR = '\r';
const LF = '\n';
const CRLF = CR + LF;

export function scanNlNode({ text, index }: Parser): Partial<NlNode> | null {
  if (text[index] === LF) {
    return nlNode(LF);
  }

  if (text[index] === CR) {
    if (text[index + 1] === LF) {
      return nlNode(CRLF);
    }

    return nlNode(CR);
  }

  return null;
}
