import {Nothing, String2} from '../../../../../../lib/types';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {Semantic} from '../../../../semantic/semantic';
import {$Node} from '../../../../syntax/node';
import {TokenNode, tokenNode} from '../../../../lexical/token/token-node';

export type LabelDocumentationNode = TokenNode<$Node.LABEL_DOCUMENTATION> & {
  semantic?: Semantic | Nothing;
};

export function labelDocumentationNode(range: TextRange, text: String2): LabelDocumentationNode {
  return tokenNode({$: $Node.LABEL_DOCUMENTATION, range, text});
}
