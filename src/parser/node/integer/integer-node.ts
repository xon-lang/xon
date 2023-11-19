import { String2 } from '~/lib/core';
import { ParserContext } from '~/parser/parser-context';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

export interface IntegerNode extends TokenNode {
  $: NodeType.INTEGER;
}

export function integerNode(text: String2): Partial<IntegerNode> {
  return {
    $: NodeType.INTEGER,
    text,
  };
}

const DIGITS = '0123456789';
const LETTERS = '_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DIGITS_LETTERS = DIGITS + LETTERS;

export function scanIntegerNode({ source, index }: ParserContext): Partial<IntegerNode> | null {
  if (DIGITS.includes(source.text[index])) {
    const otherSymbols = source.text.takeWhile((x) => DIGITS_LETTERS.includes(x), index + 1);

    return integerNode(source.text[index] + otherSymbols);
  }

  return null;
}
