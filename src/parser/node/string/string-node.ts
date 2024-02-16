import { String2 } from '../../../lib/core';
import { ParserContext } from '../../../parser/parser-context';
import { SourceRange } from '../../../source/source-range';
import { STRING_QUOTE } from '../../parser-config';
import { coreDeclarationMeta } from '../../type/core';
import { LiteralMeta, literalMeta } from '../../type/type';
import { $Node, TokenNode } from '../node';

export interface StringNode extends TokenNode {
  $: $Node.STRING;
  meta: LiteralMeta;
}

export function stringNode(range: SourceRange, text: String2): StringNode {
  return {
    $: $Node.STRING,
    meta: literalMeta(coreDeclarationMeta('String'), text),
    range,
    text,
  };
}

export function scanStringNode(context: ParserContext): StringNode | null {
  if (context.source.text[context.position.index] === STRING_QUOTE) {
    const nextQuoteIndex = context.source.text.indexOf(STRING_QUOTE, context.position.index + 1);
    const endSlice = nextQuoteIndex < 0 ? context.source.text.length : nextQuoteIndex + 1;
    const text = context.source.text.slice(context.position.index, endSlice);
    const range = context.getRange(text.length);

    return stringNode(range, text);
  }

  return null;
}
