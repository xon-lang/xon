import { Char, Integer, String2 } from '~/lib/core';
import { NodeType, TokenNode } from '~/node/node';

export interface IntegerNode extends TokenNode {
  type: NodeType.INTEGER;
}

export function integerNode(start: Integer, stop: Integer, text: String2): IntegerNode {
  return {
    type: NodeType.INTEGER,
    start,
    stop,
    text,
  };
}

const DIGITS = '0123456789';
const LETTERS = '_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DIGITS_LETTERS = DIGITS + LETTERS;

export function scanIntegerNode(chars: Char[], index: Integer): IntegerNode | null {
  if (DIGITS.includes(chars[index])) {
    let nextIndex = index;
    for (let i = index + 1; i < chars.length; i++) {
      // todo use takeWhile
      if (!DIGITS_LETTERS.includes(chars[i])) {
        break;
      }
      nextIndex = i;
    }
    return integerNode(index, nextIndex, chars.slice(index, nextIndex + 1).join(''));
  }
  return null;
}
