import { Integer } from '~/lib/core';
import { Node, NodeType } from '~/node/node';
import { Source } from '~/parser/source/source';

export interface IdNode extends Node {}

export function idNode(startIndex: Integer, stopIndex: Integer): IdNode {
  return {
    type: NodeType.ID,
    startIndex,
    stopIndex,
  };
}

const DIGITS = '0123456789';
const LETTERS = '_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DIGITS_LETTERS = DIGITS + LETTERS;

export function scanIdNode(source: Source, startIndex: Integer, stopIndex: Integer): IdNode | null {
  if (LETTERS.includes(source.text[startIndex])) {
    let nextIndex = startIndex;
    for (let i = startIndex + 1; i <= stopIndex; i++) {
      if (!DIGITS_LETTERS.includes(source.text[i])) {
        break;
      }
      nextIndex = i;
    }
    return idNode(startIndex, nextIndex);
  }
  return null;
}