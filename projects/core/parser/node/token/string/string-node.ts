import {String2} from '../../../../lib/core';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {STRING_QUOTE} from '../../../parser-config';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface StringNode extends TokenNode {
  $: $Node.STRING;
  value: String2;
}

export function stringNode(range: TextResourceRange, text: String2): StringNode {
  const lastIndex = text.length > 1 && text.last() === STRING_QUOTE ? -1 : text.length;
  const value = text.slice(1, lastIndex);

  return tokenNode($Node.STRING, {range, text, value});
}
