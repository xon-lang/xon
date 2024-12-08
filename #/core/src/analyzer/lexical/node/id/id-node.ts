import {Nothing, TextData, TextReference} from '#common';
import {$LexicalNode, corePackageType, LexicalNode, lexicalNode} from '#core';
import {DeclarationSemantics, DocumentationIdSemantics, IdTypeSemantics, IdValueSemantics} from '#semantics';

// todo should be as IdContentNode ???
export type IdNode = LexicalNode & {
  semantic?: IdValueSemantics | IdTypeSemantics | DeclarationSemantics | DocumentationIdSemantics | Nothing;
};

export const $IdNode = corePackageType<IdNode>('IdNode', $LexicalNode);

export function idNode(reference: TextReference, text: TextData): IdNode {
  return lexicalNode({$: $IdNode, reference, text, semantic: null, isExpression: true});
}
