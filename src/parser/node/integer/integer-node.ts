import { Integer, String2 } from '~/lib/core';
import { NonHiddenLexicalNode } from '~/parser/node/lexical-node';
import { LexicalAnalysis } from '~/parser/parser';
import { NodeType } from '../node-type';

export interface IntegerNode extends NonHiddenLexicalNode {
  $: NodeType.INTEGER;
}

export function integerNode(start: Integer, stop: Integer, text: String2): IntegerNode {
  return {
    $: NodeType.INTEGER,
    hidden: [],
    start,
    stop,
    text,
  };
}

const DIGITS = '0123456789';
const LETTERS = '_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DIGITS_LETTERS = DIGITS + LETTERS;

export function scanIntegerNode({ text, index }: LexicalAnalysis): IntegerNode | null {
  if (DIGITS.includes(text[index])) {
    let nextIndex = index;

    for (let i = index + 1; i < text.length; i++) {
      // todo use takeWhile
      if (!DIGITS_LETTERS.includes(text[i])) {
        break;
      }
      nextIndex = i;
    }

    return integerNode(index, nextIndex, text.slice(index, nextIndex + 1));
  }

  return null;
}
