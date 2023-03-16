import { Source } from '~/compiler/source/source';
import { Integer, String2 } from '~/lib/core';
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

export function scanIntegerNode(source: Source, start: Integer, stop: Integer): IntegerNode | null {
  if (DIGITS.includes(source.text[start])) {
    let nextIndex = start;
    for (let i = start + 1; i <= stop; i++) {
      // todo use takeWhile
      if (!DIGITS_LETTERS.includes(source.text[i])) {
        break;
      }
      nextIndex = i;
    }
    return integerNode(start, nextIndex, source.textBetweenIndices(start, nextIndex));
  }
  return null;
}
