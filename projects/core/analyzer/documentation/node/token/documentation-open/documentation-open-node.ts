import {String2} from '../../../../../../lib/types';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {TokenNode, tokenNode} from '../../../../lexical/node/token-node';
import {$Node} from '../../../../syntax/node';

export type DocumentationOpenNode = TokenNode<$Node.DOCUMENTATION_OPEN>;

export function documentationOpenNode(range: TextRange, text: String2): DocumentationOpenNode {
  return tokenNode({$: $Node.DOCUMENTATION_OPEN, range, text});
}
