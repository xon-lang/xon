import {Nothing, String2, nothing} from '../../../../../lib/core';
import {SourceRange} from '../../../../../source/source-range';
import {CHAR_QUOTE} from '../../../../syntax-config';
import {SyntaxContext} from '../../../../syntax-context';
import {$Node} from '../../../node';
import {tokenNode} from '../../token-node';
import {LiteralTokenNode} from '../literal-token-node';

export interface CharNode extends LiteralTokenNode {
  $: $Node.CHAR;
}

export function charNode(range: SourceRange, text: String2): CharNode {
  return tokenNode($Node.CHAR, range, text);
}

export function scanCharNode(context: SyntaxContext): CharNode | Nothing {
  if (context.source.text[context.position.index] !== CHAR_QUOTE) {
    return nothing;
  }

  const nextQuoteIndex = context.source.text.indexOf(CHAR_QUOTE, context.position.index + 1);

  const endSlice = nextQuoteIndex < 0 ? context.source.text.length : nextQuoteIndex + 1;
  const text = context.source.text.slice(context.position.index, endSlice);
  const range = context.getRange(text.length, false);

  return charNode(range, text);
}
