import {Text, TextReference} from '#common';
import {$LexicalNode, corePackageType, LexicalNode, lexicalNode} from '#core';
import {Brand} from '#typing';

export type UnknownNode = LexicalNode & Brand<'Core.UnknownNode'>;

export const $UnknownNode = corePackageType<UnknownNode>('UnknownNode', $LexicalNode);

export function unknownNode(reference: TextReference, text: Text): UnknownNode {
  return lexicalNode({$: $UnknownNode, reference, text});
}
