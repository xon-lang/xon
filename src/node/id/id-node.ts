import { Source } from '~/compiler/source/source';
import { Integer, String2 } from '~/lib/core';
import { NodeType, TokenNode } from '~/node/node';

export interface IdNode extends TokenNode {
  type: NodeType.ID;
}

export function idNode(start: Integer, stop: Integer, text: String2): IdNode {
  return {
    type: NodeType.ID,
    start,
    stop,
    text,
  };
}

const DIGITS = '0123456789';
const LETTERS = '_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DIGITS_LETTERS = DIGITS + LETTERS;

export function scanIdNode(source: Source, start: Integer, stop: Integer): IdNode | null {
  if (LETTERS.includes(source.text[start])) {
    let nextIndex = start;
    for (let i = start + 1; i <= stop; i++) {
      if (!DIGITS_LETTERS.includes(source.text[i])) {
        break;
      }
      nextIndex = i;
    }
    return idNode(start, nextIndex, source.textBetweenIndices(start, nextIndex));
  }
  return null;
}
