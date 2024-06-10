import {Array2, Nothing, String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../node';
import {HiddenNode, TokenNode, tokenNode} from '../token-node';

export type DocumentationNode = TokenNode<$Node.DOCUMENTATION> &
  HiddenNode & {
    description?: String2 | Nothing;
    parameters?: Array2<{name: String2; description?: String2 | Nothing}>;
    return?: String2 | Nothing;
  };

export function documentationNode(range: TextRange, text: String2): DocumentationNode {
  return tokenNode({$: $Node.DOCUMENTATION, range, text});
}
