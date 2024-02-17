import { String2 } from '../../../lib/core';
import { ParserContext } from '../../../parser/parser-context';
import { SourceRange } from '../../../source/source-range';
import { coreDeclarationMeta } from '../../meta/core';
import { LiteralMeta, literalMeta } from '../../meta/meta';
import {
  DIGIT_0_CODE,
  DIGIT_9_CODE,
  LOWER_A_CODE,
  LOWER_Z_CODE,
  UNDERSCORE_CODE,
  UPPER_A_CODE,
  UPPER_Z_CODE,
} from '../../parser-config';
import { $Node, TokenNode } from '../node';

export interface IntegerNode extends TokenNode {
  $: $Node.INTEGER;
  // meta: LiteralMeta;
}

export function integerNode(range: SourceRange, text: String2): IntegerNode {
  return {
    $: $Node.INTEGER,
    // meta: literalMeta(coreDeclarationMeta('Integer'), Number(text)),
    range,
    text,
  };
}

export function scanIntegerNode(context: ParserContext): IntegerNode | null {
  const firstCharCode = context.source.characters[context.position.index];
  const isFirstCharDigit = firstCharCode >= DIGIT_0_CODE && firstCharCode <= DIGIT_9_CODE;

  if (!isFirstCharDigit) {
    return null;
  }

  const sliced = context.source.text.takeWhile((x) => {
    const code = x.charCodeAt(0);

    return (
      (code >= DIGIT_0_CODE && code <= DIGIT_9_CODE) ||
      (code >= UPPER_A_CODE && code <= UPPER_Z_CODE) ||
      (code >= LOWER_A_CODE && code <= LOWER_Z_CODE) ||
      code === UNDERSCORE_CODE
    );
  }, context.position.index);

  const range = context.getRange(sliced.length);

  return integerNode(range, sliced);
}
