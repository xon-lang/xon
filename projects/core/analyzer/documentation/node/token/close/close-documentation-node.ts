import {String2} from '../../../../../../lib/types';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {$Node} from '../../../../syntax/node';
import {TokenNode, tokenNode} from '../../../../lexical/token/token-node';

export type CloseDocumentationNode = TokenNode<$Node.CLOSE_DOCUMENTATION>;

export function closeDocumentationNode(range: TextRange, text: String2): CloseDocumentationNode {
  return tokenNode({$: $Node.CLOSE_DOCUMENTATION, range, text});
}
