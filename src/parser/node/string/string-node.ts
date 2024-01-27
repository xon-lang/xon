import { String2 } from '../../../lib/core';
import { ParserContext } from '../../../parser/parser-context';
import { SourceRange } from '../../../source/source-range';
import { STRING_QUOTE } from '../../parser-config';
import { StringType, Type } from '../../type/type';
import { TokenNode } from '../node';
import { NodeType } from '../node-type';

export interface StringNode extends TokenNode {
  $: NodeType.STRING;
  type: Type;
}

export function stringNode(range: SourceRange, text: String2): StringNode {
  return {
    $: NodeType.STRING,
    type: StringType,
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
