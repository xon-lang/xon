import {$LexicalNode, analyzerPackageType, LexicalNode, lexicalNode} from '#analyzer';
import {Text, TextReference} from '#common';
import {Brand} from '#typing';

export type DocumentationOpenNode = LexicalNode & Brand<'Core.DocumentationOpenNode'>;

export const $DocumentationOpenNode = analyzerPackageType<DocumentationOpenNode>(
  'DocumentationOpenNode',
  $LexicalNode,
);

export function documentationOpenNode(reference: TextReference, text: Text): DocumentationOpenNode {
  return lexicalNode({$: $DocumentationOpenNode, reference, text});
}
