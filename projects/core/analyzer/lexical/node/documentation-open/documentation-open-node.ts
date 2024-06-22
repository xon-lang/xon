import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../../syntax/node';
import {TokenNode, tokenNode} from '../token-node';

export type DocumentationOpenNode = TokenNode<$Node.DOCUMENTATION_OPEN>;

export function documentationOpenNode(range: TextRange, text: String2): DocumentationOpenNode {
  return tokenNode({$: $Node.DOCUMENTATION_OPEN, range, text});
}
