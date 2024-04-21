import {String2} from '../../../../lib/core';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface UnknownNode extends TokenNode {
  $: $Node.UNKNOWN;
}

export function unknownNode(range: TextResourceRange, text: String2): UnknownNode {
  return tokenNode($Node.UNKNOWN, {range, text});
}
