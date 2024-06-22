import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../../syntax/node';
import {LexicalNode, tokenNode} from '../lexical-node';

export type DocumentationOpenNode = LexicalNode<$Node.DOCUMENTATION_OPEN>;

export function documentationOpenNode(range: TextRange, text: String2): DocumentationOpenNode {
  return tokenNode({$: $Node.DOCUMENTATION_OPEN, range, text});
}
