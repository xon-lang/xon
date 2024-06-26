import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../../node';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type DocumentationCloseNode = LexicalNode<$Node.DOCUMENTATION_CLOSE>;

export function documentationCloseNode(range: TextRange, text: String2): DocumentationCloseNode {
  return lexicalNode({$: $Node.DOCUMENTATION_CLOSE, range, text});
}
