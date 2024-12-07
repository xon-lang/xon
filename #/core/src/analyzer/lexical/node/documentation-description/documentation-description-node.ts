import {TextData, TextReference} from '#common';
import {$LexicalNode, corePackageType, LexicalNode, lexicalNode} from '#core';

export type DocumentationDescriptionNode = LexicalNode;

export const $DocumentationDescriptionNode = corePackageType<DocumentationDescriptionNode>(
  'DocumentationDescriptionNode',
  $LexicalNode,
);

export function documentationDescriptionNode(
  reference: TextReference,
  text: TextData,
): DocumentationDescriptionNode {
  return lexicalNode({$: $DocumentationDescriptionNode, reference, text});
}
