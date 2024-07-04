import {$Node} from '../../../../$';
import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type DocumentationCloseNode = LexicalNode<$Node.DocumentationCloseNode>;

export function documentationCloseNode(range: TextRange, text: String2): DocumentationCloseNode {
  return lexicalNode({$: $Node.DocumentationCloseNode, range, text});
}
