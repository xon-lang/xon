import {$, LexicalNode, TextData, TextResourceRange, lexicalNode} from '#core';

// todo should we move 'DocumentationCloseNode' to open folder near other nodes ???
export type DocumentationCloseNode = LexicalNode<$.DocumentationCloseNode>;

export function documentationCloseNode(reference: TextResourceRange, text: TextData): DocumentationCloseNode {
  return lexicalNode({$: $.DocumentationCloseNode, reference, text});
}
