import {TextData, TextReference} from '#common';
import {$CloseNode, CloseNode, corePackageType, lexicalNode} from '#core';

export type BraceCloseNode = CloseNode;

export const $BraceCloseNode = corePackageType<BraceCloseNode>('BraceCloseNode', $CloseNode);

export function braceCloseNode(reference: TextReference, text: TextData): BraceCloseNode {
  return lexicalNode({$: $BraceCloseNode, reference, text});
}
