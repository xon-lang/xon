import {TextData, TextReference} from '#common';
import {$OpenNode, OpenNode, corePackageType, lexicalNode} from '#core';

export type BracketOpenNode = OpenNode;

export const $BracketOpenNode = corePackageType<BracketOpenNode>('BracketOpenNode', $OpenNode);

export function bracketOpenNode(reference: TextReference, text: TextData): BracketOpenNode {
  return lexicalNode({$: $BracketOpenNode, reference, text});
}
