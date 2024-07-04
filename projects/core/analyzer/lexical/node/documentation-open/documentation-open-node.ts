import {$} from '../../../../$';
import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type DocumentationOpenNode = LexicalNode<$.DocumentationOpenNode>;

export function documentationOpenNode(range: TextRange, text: String2): DocumentationOpenNode {
  return lexicalNode({$: $.DocumentationOpenNode, range, text});
}
