import {$} from '../../../../$';
import {TextData} from '../../../../util/data/text-data';
import {TextRange} from '../../../../util/resource/text/text-range';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type DocumentationOpenNode = LexicalNode<$.DocumentationOpenNode>;

export function documentationOpenNode(range: TextRange, text: TextData): DocumentationOpenNode {
  return lexicalNode({$: $.DocumentationOpenNode, range, text});
}
