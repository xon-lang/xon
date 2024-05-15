import {Char, String2} from '../../../../lib/core';
import {TextRange} from '../../../../util/resource/text/text-range';
import {CHAR_QUOTE} from '../../../parser-config';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface CharNode extends TokenNode {
  $: $Node.CHAR;
  value: Char;
}

export function charNode(range: TextRange, text: String2): CharNode {
  const lastIndex = text.length > 1 && text.last() === CHAR_QUOTE ? -1 : text.length;

  return tokenNode({$: $Node.CHAR, range, text, value: text.slice(1, lastIndex)});
}
