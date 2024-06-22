import {String2} from '../../../../../../lib/types';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {LexicalNode, tokenNode} from '../../../../lexical/node/lexical-node';
import {$Node} from '../../../../syntax/node';

export type DescriptionDocumentationNode = LexicalNode<$Node.DOCUMENTATION_DESCRIPTION>;

export function descriptionDocumentationNode(range: TextRange, text: String2): DescriptionDocumentationNode {
  return tokenNode({$: $Node.DOCUMENTATION_DESCRIPTION, range, text});
}
