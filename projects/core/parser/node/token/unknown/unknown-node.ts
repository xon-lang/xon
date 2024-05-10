import {String2} from '../../../../lib/core';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface UnknownNode extends TokenNode {
  $: $Node.UNKNOWN;
}

export function unknownNode(range: TextRange, text: String2): UnknownNode {
  return tokenNode($Node.UNKNOWN, {range, text});
}
