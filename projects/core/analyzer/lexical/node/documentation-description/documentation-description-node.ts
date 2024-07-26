import {$} from '../../../../$';
import {TextData} from '../../../../util/data/text-data';
import {TextRange} from '../../../../util/resource/text/text-range';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type DocumentationDescriptionNode = LexicalNode<$.DocumentationDescriptionNode>;

export function documentationDescriptionNode(range: TextRange, text: TextData): DocumentationDescriptionNode {
  return lexicalNode({$: $.DocumentationDescriptionNode, range, text});
}
