import {Text, TextReference} from '#common';
import {$CloseNode, CloseNode, corePackageType, lexicalNode} from '#core';

export type CharCloseNode = CloseNode;

export const $CharCloseNode = corePackageType<CharCloseNode>('CharCloseNode', $CloseNode);

export function charCloseNode(reference: TextReference, text: Text): CharCloseNode {
  return lexicalNode({$: $CharCloseNode, reference, text});
}
