import {$} from '../../../../$';
import {TextData} from '../../../../util/data/text-data';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type DocumentationDescriptionNode = LexicalNode<$.DocumentationDescriptionNode>;

export function documentationDescriptionNode(
  reference: TextResourceRange,
  text: TextData,
): DocumentationDescriptionNode {
  return lexicalNode({$: $.DocumentationDescriptionNode, reference, text});
}
