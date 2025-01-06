import {$LexicalNode, analyzerPackageType, LexicalNode, lexicalNode} from '#analyzer';
import {Text, TextReference} from '#common';
import {Brand} from '#typing';

export type CharContentNode = LexicalNode & Brand<'Core.CharContentNode'>;

export const $CharContentNode = analyzerPackageType<CharContentNode>('CharContentNode', $LexicalNode);

export function charContentNode(reference: TextReference, text: Text): CharContentNode {
  return lexicalNode({$: $CharContentNode, reference, text});
}
