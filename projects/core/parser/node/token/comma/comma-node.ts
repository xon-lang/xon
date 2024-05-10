import {String2} from '../../../../lib/core';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface CommaNode extends TokenNode {
  $: $Node.COMMA;
}

export function commaNode(range: TextResourceRange, text: String2): CommaNode {
  return tokenNode($Node.COMMA, {range, text});
}
