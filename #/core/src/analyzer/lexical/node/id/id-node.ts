import {Text, TextReference} from '#common';
import {$LexicalNode, corePackageType, LexicalNode, lexicalNode} from '#core';

// todo should be as IdContentNode ???
export type IdNode = LexicalNode & {
  __branding?: null;
};

export const $IdNode = corePackageType<IdNode>('IdNode', $LexicalNode);

export function idNode(reference: TextReference, text: Text): IdNode {
  return lexicalNode({$: $IdNode, reference, text, semantic: null, isExpression: true});
}
