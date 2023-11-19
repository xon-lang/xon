import { String2 } from '~/lib/core';
import { ParserContext } from '~/parser/parser-context';
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

export function scanNlNode({ source, index }: ParserContext): Partial<NlNode> | null {
  if (source.text[index] === LF) {
    return nlNode(LF);
  }

  if (source.text[index] === CR) {
    if (source.text[index + 1] === LF) {
      return nlNode(CRLF);
    }

    return nlNode(CR);
  }

  return null;
}
