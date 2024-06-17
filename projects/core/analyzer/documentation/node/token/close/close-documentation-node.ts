import {String2} from '../../../../../../lib/types';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {$Node} from '../../../../syntax/node';
import {HiddenNode, TokenNode, tokenNode} from '../../../../syntax/token/token-node';

export type CloseDocumentationNode = TokenNode<$Node.CLOSE_DOCUMENTATION> & HiddenNode;

export function closeDocumentationNode(range: TextRange, text: String2): CloseDocumentationNode {
  return tokenNode({$: $Node.CLOSE_DOCUMENTATION, range, text});
}
