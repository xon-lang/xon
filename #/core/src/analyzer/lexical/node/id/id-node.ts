import {Nothing, TextData, TextReference} from '#common';
import {
  $LexicalNode,
  corePackageType,
  DeclarationSemantic,
  DocumentationIdSemantic,
  IdTypeSemantic,
  IdValueSemantic,
  LexicalNode,
  lexicalNode,
} from '#core';

// todo should be as IdContentNode ???
export type IdNode = LexicalNode & {
  semantic?: IdValueSemantic | IdTypeSemantic | DeclarationSemantic | DocumentationIdSemantic | Nothing;
};

export const $IdNode = corePackageType<IdNode>('IdNode', $LexicalNode);

export function idNode(reference: TextReference, text: TextData): IdNode {
  return lexicalNode({$: $IdNode, reference, text, semantic: null});
}
