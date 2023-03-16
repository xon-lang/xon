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

export function scanIdNode(text: String2, index: Integer): IdNode | null {
  if (LETTERS.includes(text[index])) {
    let nextIndex = index;
    for (let i = index + 1; i < text.length; i++) {
      if (!DIGITS_LETTERS.includes(text[i])) {
        break;
      }
      nextIndex = i;
    }
    return idNode(index, nextIndex, text.slice(index, nextIndex + 1));
  }
  return null;
}
