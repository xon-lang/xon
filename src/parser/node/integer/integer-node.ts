import { String2 } from '../../../lib/core';
import { ParserContext } from '../../../parser/parser-context';
import { SourceRange } from '../../../source/source-range';
import { UNDERSCORE_CODE } from '../../parser-config';
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
  const { source, position } = context;

  if (!source.text.isDigit(position.index)) {
    return null;
  }

  const text = context.source.text.takeWhile(
    (x, i) => x.charCodeAt(0) === UNDERSCORE_CODE || source.text.isDigitOrLetter(i),
    context.position.index,
  );

  const range = context.getRange(text.length);

  return integerNode(range, text);
}
