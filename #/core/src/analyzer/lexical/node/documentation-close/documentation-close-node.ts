import {TextData, TextReference} from '#common';
import {LexicalNode, lexicalNode} from '#core';
import {$} from '#typing';

// todo should we move 'DocumentationCloseNode' to open folder near other nodes ???
export type DocumentationCloseNode = LexicalNode<$.DocumentationCloseNode>;

export function documentationCloseNode(reference: TextReference, text: TextData): DocumentationCloseNode {
  return lexicalNode($.DocumentationCloseNode, {reference, text});
}
