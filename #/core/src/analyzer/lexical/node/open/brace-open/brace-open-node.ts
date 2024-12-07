import {TextData, TextReference} from '#common';
import {$OpenNode, OpenNode, corePackageType, lexicalNode} from '#core';

export type BraceOpenNode = OpenNode;

export const $BraceOpenNode = corePackageType<BraceOpenNode>('BraceOpenNode', $OpenNode);

export function braceOpenNode(reference: TextReference, text: TextData): BraceOpenNode {
  return lexicalNode({$: $BraceOpenNode, reference, text});
}
