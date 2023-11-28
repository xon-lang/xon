import { String2 } from '~/lib/core';
import { ParserContext } from '~/parser/parser-context';
import {
  DIGIT_0_CODE,
  DIGIT_9_CODE,
  LOWER_A_CODE,
  LOWER_Z_CODE,
  UNDERSCORE_CODE,
  UPPER_A_CODE,
  UPPER_Z_CODE,
} from '~/parser/util/operators';
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

export function scanIntegerNode({ source, index }: ParserContext): Partial<IntegerNode> | null {
  const firstCharCode = source.characters[index];
  const isFirstCharDigit = firstCharCode >= DIGIT_0_CODE && firstCharCode <= DIGIT_9_CODE;

  if (!isFirstCharDigit) {
    return null;
  }

  const sliced = source.text.takeWhile((x) => {
    const code = x.charCodeAt(0);

    return (
      (code >= DIGIT_0_CODE && code <= DIGIT_9_CODE) ||
      (code >= UPPER_A_CODE && code <= UPPER_Z_CODE) ||
      (code >= LOWER_A_CODE && code <= LOWER_Z_CODE) ||
      code === UNDERSCORE_CODE
    );
  }, index);

  return integerNode(sliced);
}
