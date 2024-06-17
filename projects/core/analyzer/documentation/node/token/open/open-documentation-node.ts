import {String2} from '../../../../../../lib/types';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {$Node} from '../../../../syntax/node';
import {HiddenNode, TokenNode, tokenNode} from '../../../../syntax/token/token-node';

export type OpenDocumentationNode = TokenNode<$Node.OPEN_DOCUMENTATION> & HiddenNode;

export function openDocumentationNode(range: TextRange, text: String2): OpenDocumentationNode {
  return tokenNode({$: $Node.OPEN_DOCUMENTATION, range, text});
}
