import {$} from '../../../../$';
import {TextData} from '../../../../util/data/text-data';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type DocumentationOpenNode = LexicalNode<$.DocumentationOpenNode>;

export function documentationOpenNode(reference: TextResourceRange, text: TextData): DocumentationOpenNode {
  return lexicalNode({$: $.DocumentationOpenNode, reference, text});
}
