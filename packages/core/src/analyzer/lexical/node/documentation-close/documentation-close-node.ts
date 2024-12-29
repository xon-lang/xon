import {Text, TextReference} from '#common';
import {$LexicalNode, corePackageType, LexicalNode, lexicalNode} from '#core';
import {Brand} from '#typing';

// todo should we move 'DocumentationCloseNode' to open folder near other nodes ???
export type DocumentationCloseNode = LexicalNode & Brand<'Core.DocumentationCloseNode'>;

export const $DocumentationCloseNode = corePackageType<DocumentationCloseNode>(
  'DocumentationCloseNode',
  $LexicalNode,
);

export function documentationCloseNode(reference: TextReference, text: Text): DocumentationCloseNode {
  return lexicalNode({$: $DocumentationCloseNode, reference, text});
}
