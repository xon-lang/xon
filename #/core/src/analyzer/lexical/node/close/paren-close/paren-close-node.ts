import {Text, TextReference} from '#common';
import {$CloseNode, CloseNode, corePackageType, lexicalNode} from '#core';
import {Brand} from '#typing';

export type ParenCloseNode = CloseNode & Brand<'Core.ParenCloseNode'>;

export const $ParenCloseNode = corePackageType<ParenCloseNode>('ParenCloseNode', $CloseNode);

export function parenCloseNode(reference: TextReference, text: Text): ParenCloseNode {
  return lexicalNode({$: $ParenCloseNode, reference, text});
}
