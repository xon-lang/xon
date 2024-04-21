import {String2} from '../../../../lib/core';
import '../../../../util/extension';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface IdNode extends TokenNode {
  $: $Node.ID;
}

export function idNode(range: TextResourceRange, text: String2): IdNode {
  return tokenNode($Node.ID, {range, text});
}
