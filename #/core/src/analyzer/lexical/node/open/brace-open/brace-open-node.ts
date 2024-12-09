import {Text, TextReference} from '#common';
import {$OpenNode, OpenNode, corePackageType, lexicalNode} from '#core';

export type BraceOpenNode = OpenNode;

export const $BraceOpenNode = corePackageType<BraceOpenNode>('BraceOpenNode', $OpenNode);

export function braceOpenNode(reference: TextReference, text: Text): BraceOpenNode {
  return lexicalNode({$: $BraceOpenNode, reference, text});
}
