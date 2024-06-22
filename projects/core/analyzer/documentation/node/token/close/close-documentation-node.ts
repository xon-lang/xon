import {String2} from '../../../../../../lib/types';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {LexicalNode, tokenNode} from '../../../../lexical/node/lexical-node';
import {$Node} from '../../../../syntax/node';

export type CloseDocumentationNode = LexicalNode<$Node.DOCUMENTATION_CLOSE>;

export function closeDocumentationNode(range: TextRange, text: String2): CloseDocumentationNode {
  return tokenNode({$: $Node.DOCUMENTATION_CLOSE, range, text});
}
