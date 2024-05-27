import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../node';
import {HiddenNode, TokenNode, tokenNode} from '../token-node';

export type DocumentationNode = TokenNode<$Node.DOCUMENTATION> & HiddenNode;

export function documentationNode(range: TextRange, text: String2): DocumentationNode {
  return tokenNode({$: $Node.DOCUMENTATION, range, text});
}
