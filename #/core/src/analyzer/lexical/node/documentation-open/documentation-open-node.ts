import {Text, TextReference} from '#common';
import {$LexicalNode, corePackageType, LexicalNode, lexicalNode} from '#core';

export type DocumentationOpenNode = LexicalNode & {__branding?: null};

export const $DocumentationOpenNode = corePackageType<DocumentationOpenNode>(
  'DocumentationOpenNode',
  $LexicalNode,
);

export function documentationOpenNode(reference: TextReference, text: Text): DocumentationOpenNode {
  return lexicalNode({$: $DocumentationOpenNode, reference, text});
}
