import {$} from '../../../../$';
import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {LexicalNode, lexicalNode} from '../lexical-node';

// todo should we move 'DocumentationCloseNode' to open folder near other nodes ???
export type DocumentationCloseNode = LexicalNode<$.DocumentationCloseNode>;

export function documentationCloseNode(range: TextRange, text: String2): DocumentationCloseNode {
  return lexicalNode({$: $.DocumentationCloseNode, range, text});
}
