import { String2 } from '../../../../lib/core';
import { SourceRange } from '../../../../source/source-range';
import { STRING_QUOTE } from '../../../syntax-config';
import { SyntaxContext } from '../../../syntax-context';
import { $Node } from '../../node';
import { TokenNode, token } from '../token-node';

export interface StringNode extends TokenNode {
  $: $Node.STRING;
}

export function stringNode(range: SourceRange, text: String2): StringNode {
  return token($Node.STRING, range, text);
}

export function scanStringNode(context: SyntaxContext): StringNode | null {
  if (context.source.text[context.position.index] === STRING_QUOTE) {
    const nextQuoteIndex = context.source.text.indexOf(STRING_QUOTE, context.position.index + 1);
    const endSlice = nextQuoteIndex < 0 ? context.source.text.length : nextQuoteIndex + 1;
    const text = context.source.text.slice(context.position.index, endSlice);
    const range = context.getRange(text.length);

    return stringNode(range, text);
  }

  return null;
}
