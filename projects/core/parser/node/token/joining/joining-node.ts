import {String2} from '../../../../lib/core';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface JoiningNode extends TokenNode {
  $: $Node.JOINING;
}

export function joiningNode(range: TextResourceRange, text: String2): JoiningNode {
  return tokenNode($Node.JOINING, {range, text});
}
