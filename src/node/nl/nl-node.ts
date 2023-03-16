import { Source } from '~/compiler/source/source';
import { Integer, String2 } from '~/lib/core';
import { NodeType, TokenNode } from '~/node/node';

export interface NlNode extends TokenNode {
  type: NodeType.NL;
}

export function nlNode(start: Integer, stop: Integer, text: String2): NlNode {
  return {
    type: NodeType.NL,
    start,
    stop,
    text,
  };
}

const LF = '\n';
const CR = '\r';

export function scanNlNode(source: Source, start: Integer, stop: Integer): NlNode | null {
  if (source.text[start] === LF) {
    return nlNode(start, start, LF);
  }
  if (source.text[start] === CR) {
    if (source.text[start + 1] === LF) {
      return nlNode(start, start + 1, CR + LF);
    }
    return nlNode(start, start, CR);
  }

  return null;
}
