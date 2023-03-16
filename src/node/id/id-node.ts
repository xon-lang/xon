import { Char, Integer, String2 } from '~/lib/core';
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

export function scanIdNode(chars: Char[], index: Integer): IdNode | null {
  if (LETTERS.includes(chars[index])) {
    let nextIndex = index;
    for (let i = index + 1; i < chars.length; i++) {
      if (!DIGITS_LETTERS.includes(chars[i])) {
        break;
      }
      nextIndex = i;
    }
    return idNode(index, nextIndex, chars.slice(index, nextIndex + 1).join(''));
  }
  return null;
}
