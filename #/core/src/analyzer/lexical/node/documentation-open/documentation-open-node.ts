import {Text, TextReference} from '#common';
import {$LexicalNode, corePackageType, LexicalNode, lexicalNode} from '#core';
import {Brand} from '#typing';

export type DocumentationOpenNode = LexicalNode & Brand<'Core.DocumentationOpenNode'>;

export const $DocumentationOpenNode = corePackageType<DocumentationOpenNode>(
  'DocumentationOpenNode',
  $LexicalNode,
);

export function documentationOpenNode(reference: TextReference, text: Text): DocumentationOpenNode {
  return lexicalNode({$: $DocumentationOpenNode, reference, text});
}
