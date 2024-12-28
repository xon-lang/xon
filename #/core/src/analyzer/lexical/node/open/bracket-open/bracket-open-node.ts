import {Text, TextReference} from '#common';
import {$OpenNode, OpenNode, corePackageType, lexicalNode} from '#core';

export type BracketOpenNode = OpenNode & {__branding?: null};

export const $BracketOpenNode = corePackageType<BracketOpenNode>('BracketOpenNode', $OpenNode);

export function bracketOpenNode(reference: TextReference, text: Text): BracketOpenNode {
  return lexicalNode({$: $BracketOpenNode, reference, text});
}
