import {String2} from '../../../../lib/core';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface OpenNode extends TokenNode {
  $: $Node.OPEN;
}

export function openNode(range: TextResourceRange, text: String2): OpenNode {
  return tokenNode($Node.OPEN, {range, text});
}
