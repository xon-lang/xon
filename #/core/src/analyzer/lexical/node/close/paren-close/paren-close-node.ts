import {TextData, TextReference} from '#common';
import {$CloseNode, CloseNode, corePackageType, lexicalNode} from '#core';

export type ParenCloseNode = CloseNode;

export const $ParenCloseNode = corePackageType<ParenCloseNode>('ParenCloseNode', $CloseNode);

export function parenCloseNode(reference: TextReference, text: TextData): ParenCloseNode {
  return lexicalNode({$: $ParenCloseNode, reference, text});
}
