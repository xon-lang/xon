import {Nothing, String2, nothing} from '../../../../../lib/core';
import {SourceRange} from '../../../../../source/source-range';
import {STRING_QUOTE} from '../../../../syntax-config';
import {SyntaxContext} from '../../../../syntax-context';
import {$Node} from '../../../node';
import {tokenNode} from '../../token-node';
import {LiteralTokenNode} from '../literal-token-node';

export interface StringNode extends LiteralTokenNode {
  $: $Node.STRING;
}

export function stringNode(range: SourceRange, text: String2): StringNode {
  return tokenNode($Node.STRING, range, text);
}

export function scanStringNode(context: SyntaxContext): StringNode | Nothing {
  const {source, position} = context;

  if (source.text[position.index] === STRING_QUOTE) {
    const stopIndex = source.text.indexOf(STRING_QUOTE, position.index + STRING_QUOTE.length);
    const endSlice = stopIndex < 0 ? source.text.length : stopIndex + STRING_QUOTE.length;

    const text = source.text.slice(position.index, endSlice);
    const range = context.getRange(text.length, true);

    return stringNode(range, text);
  }

  return nothing;
}
