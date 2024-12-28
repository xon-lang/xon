import {Text, TextReference} from '#common';
import {$LexicalNode, corePackageType, LexicalNode, lexicalNode} from '#core';
import {Brand} from '#typing';

export type WhitespaceNode = LexicalNode & Brand<'Core.WhitespaceNode'>;

export const $WhitespaceNode = corePackageType<WhitespaceNode>('WhitespaceNode', $LexicalNode);

export function whitespaceNode(reference: TextReference, text: Text): WhitespaceNode {
  return lexicalNode({$: $WhitespaceNode, reference, text, isHidden: true});
}
