import {Integer, String2} from '../../../../lib/core';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface IntegerNode extends TokenNode {
  $: $Node.INTEGER;
  value: Integer;
}

export function integerNode(range: TextRange, text: String2): IntegerNode {
  const value = Number(text);

  return tokenNode($Node.INTEGER, {range, text, value});
}
