import {Nothing, String2} from '../../../../../../lib/types';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {Semantic} from '../../../../semantic/semantic';
import {$Node} from '../../../../syntax/node';
import {HiddenNode, TokenNode, tokenNode} from '../../../../syntax/token/token-node';

export type LabelDocumentationNode = TokenNode<$Node.LABEL_DOCUMENTATION> &
  HiddenNode & {
    semantic?: Semantic | Nothing;
  };

export function labelDocumentationNode(range: TextRange, text: String2): LabelDocumentationNode {
  return tokenNode({$: $Node.LABEL_DOCUMENTATION, range, text});
}
