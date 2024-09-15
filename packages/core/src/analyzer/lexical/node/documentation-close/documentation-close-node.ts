import {$} from '../../../../$';
import {TextData} from '../../../../util/data/text-data';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {LexicalNode, lexicalNode} from '../lexical-node';

// todo should we move 'DocumentationCloseNode' to open folder near other nodes ???
export type DocumentationCloseNode = LexicalNode<$.DocumentationCloseNode>;

export function documentationCloseNode(reference: TextResourceRange, text: TextData): DocumentationCloseNode {
  return lexicalNode({$: $.DocumentationCloseNode, reference, text});
}
