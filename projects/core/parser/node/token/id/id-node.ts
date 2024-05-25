import {String2} from '../../../../../lib/types';
import '../../../../util/extension';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node, SemanticNode} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export type IdNode = TokenNode<$Node.ID> & SemanticNode;

export function idNode(range: TextRange, text: String2): IdNode {
  return tokenNode({$: $Node.ID, range, text});
}
