import {$Node} from '../../../../$';
import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type DocumentationOpenNode = LexicalNode<$Node.DocumentationOpenNode>;

export function documentationOpenNode(range: TextRange, text: String2): DocumentationOpenNode {
  return lexicalNode({$: $Node.DocumentationOpenNode, range, text});
}
