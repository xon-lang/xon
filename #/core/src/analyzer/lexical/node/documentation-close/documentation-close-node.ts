import {TextData, TextReference} from '#common';
import {$LexicalNode, corePackageType, LexicalNode, lexicalNode} from '#core';

// todo should we move 'DocumentationCloseNode' to open folder near other nodes ???
export type DocumentationCloseNode = LexicalNode;

export const $DocumentationCloseNode = corePackageType<DocumentationCloseNode>(
  'DocumentationCloseNode',
  $LexicalNode,
);

export function documentationCloseNode(reference: TextReference, text: TextData): DocumentationCloseNode {
  return lexicalNode({$: $DocumentationCloseNode, reference, text});
}
