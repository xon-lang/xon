import {String2} from '../../../../lib/core';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface WhitespaceNode extends TokenNode {
  $: $Node.WHITESPACE;
}

export function whitespaceNode(range: TextRange, text: String2): WhitespaceNode {
  return tokenNode({$: $Node.WHITESPACE, range, text});
}
