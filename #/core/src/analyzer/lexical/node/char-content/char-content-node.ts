import {Text, TextReference} from '#common';
import {$LexicalNode, corePackageType, LexicalNode, lexicalNode} from '#core';

export type CharContentNode = LexicalNode;

export const $CharContentNode = corePackageType<CharContentNode>('CharContentNode', $LexicalNode);

export function charContentNode(reference: TextReference, text: Text): CharContentNode {
  return lexicalNode({$: $CharContentNode, reference, text});
}
