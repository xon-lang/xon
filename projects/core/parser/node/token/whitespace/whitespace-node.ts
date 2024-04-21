import {String2} from '../../../../lib/core';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface WhitespaceNode extends TokenNode {
  $: $Node.WHITESPACE;
}

export function whitespaceNode(range: TextResourceRange, text: String2): WhitespaceNode {
  return tokenNode($Node.WHITESPACE, {range, text});
}
