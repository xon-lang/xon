import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface NlNode extends TokenNode {
  $: $Node.NL;
}

export function nlNode(range: TextRange, text: String2): NlNode {
  return tokenNode({$: $Node.NL, range, text});
}
