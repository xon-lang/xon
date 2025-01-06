import {$LexicalNode, analyzerPackageType, LexicalNode, lexicalNode} from '#analyzer';
import {Text, TextReference} from '#common';
import {Brand} from '#typing';

export type DocumentationCloseNode = LexicalNode & Brand<'Core.DocumentationCloseNode'>;

export const $DocumentationCloseNode = analyzerPackageType<DocumentationCloseNode>(
  'DocumentationCloseNode',
  $LexicalNode,
);

export function documentationCloseNode(reference: TextReference, text: Text): DocumentationCloseNode {
  return lexicalNode({$: $DocumentationCloseNode, reference, text});
}
