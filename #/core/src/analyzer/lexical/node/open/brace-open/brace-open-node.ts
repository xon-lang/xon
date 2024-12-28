import {Text, TextReference} from '#common';
import {$OpenNode, OpenNode, corePackageType, lexicalNode} from '#core';

export type BraceOpenNode = OpenNode & {__branding?: null};

export const $BraceOpenNode = corePackageType<BraceOpenNode>('BraceOpenNode', $OpenNode);

export function braceOpenNode(reference: TextReference, text: Text): BraceOpenNode {
  return lexicalNode({$: $BraceOpenNode, reference, text});
}
