import {String2} from '../../../../lib/core';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface CommaNode extends TokenNode {
  $: $Node.COMMA;
}

export function commaNode(range: TextRange, text: String2): CommaNode {
  return tokenNode({$: $Node.COMMA, range, text});
}
