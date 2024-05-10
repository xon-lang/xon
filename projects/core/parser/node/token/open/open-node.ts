import {String2} from '../../../../lib/core';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface OpenNode extends TokenNode {
  $: $Node.OPEN;
}

export function openNode(range: TextRange, text: String2): OpenNode {
  return tokenNode($Node.OPEN, {range, text});
}
