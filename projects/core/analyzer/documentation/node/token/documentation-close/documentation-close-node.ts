import {String2} from '../../../../../../lib/types';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {TokenNode, tokenNode} from '../../../../lexical/node/token-node';
import {$Node} from '../../../../syntax/node';

export type DocumentationCloseNode = TokenNode<$Node.DOCUMENTATION_CLOSE>;

export function documentationCloseNode(range: TextRange, text: String2): DocumentationCloseNode {
  return tokenNode({$: $Node.DOCUMENTATION_CLOSE, range, text});
}
