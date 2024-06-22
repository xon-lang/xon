import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../../syntax/node';
import {LexicalNode, tokenNode} from '../lexical-node';

export type DocumentationCloseNode = LexicalNode<$Node.DOCUMENTATION_CLOSE>;

export function documentationCloseNode(range: TextRange, text: String2): DocumentationCloseNode {
  return tokenNode({$: $Node.DOCUMENTATION_CLOSE, range, text});
}
