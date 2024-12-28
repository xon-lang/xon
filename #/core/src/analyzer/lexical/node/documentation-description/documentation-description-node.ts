import {Text, TextReference} from '#common';
import {$LexicalNode, corePackageType, LexicalNode, lexicalNode} from '#core';

export type DocumentationDescriptionNode = LexicalNode & {__branding?: null};

export const $DocumentationDescriptionNode = corePackageType<DocumentationDescriptionNode>(
  'DocumentationDescriptionNode',
  $LexicalNode,
);

export function documentationDescriptionNode(
  reference: TextReference,
  text: Text,
): DocumentationDescriptionNode {
  return lexicalNode({$: $DocumentationDescriptionNode, reference, text});
}
