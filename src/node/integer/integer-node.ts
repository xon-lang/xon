import { Source } from '~/compiler/source/source';
import { Integer } from '~/lib/core';
import { Node, NodeType } from '~/node/node';

export interface IntegerNode extends Node {}

export function integerNode(startIndex: Integer, stopIndex: Integer): IntegerNode {
  return {
    type: NodeType.INTEGER,
    startIndex,
    stopIndex,
  };
}

const DIGITS = '0123456789';
const LETTERS = '_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DIGITS_LETTERS = DIGITS + LETTERS;

export function scanIntegerNode(source: Source, startIndex: Integer, stopIndex: Integer): IntegerNode | null {
  if (DIGITS.includes(source.text[startIndex])) {
    let nextIndex = startIndex;
    for (let i = startIndex + 1; i <= stopIndex; i++) {
      if (!DIGITS_LETTERS.includes(source.text[i])) {
        break;
      }
      nextIndex = i;
    }
    return integerNode(startIndex, nextIndex);
  }
  return null;
}
