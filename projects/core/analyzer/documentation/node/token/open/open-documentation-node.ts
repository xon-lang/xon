import {String2} from '../../../../../../lib/types';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {$Node} from '../../../../syntax/node';
import {TokenNode, tokenNode} from '../../../../lexical/token/token-node';

export type OpenDocumentationNode = TokenNode<$Node.OPEN_DOCUMENTATION>;

export function openDocumentationNode(range: TextRange, text: String2): OpenDocumentationNode {
  return tokenNode({$: $Node.OPEN_DOCUMENTATION, range, text});
}
