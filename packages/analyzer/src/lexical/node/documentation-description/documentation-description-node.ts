import {$LexicalNode, analyzerPackageType, LexicalNode, lexicalNode} from '#analyzer';
import {Text, TextReference} from '#common';
import {Brand} from '#typing';

export type DocumentationDescriptionNode = LexicalNode & Brand<'Core.DocumentationDescriptionNode'>;

export const $DocumentationDescriptionNode = analyzerPackageType<DocumentationDescriptionNode>(
  'DocumentationDescriptionNode',
  $LexicalNode,
);

export function documentationDescriptionNode(
  reference: TextReference,
  text: Text,
): DocumentationDescriptionNode {
  return lexicalNode({$: $DocumentationDescriptionNode, reference, text});
}
