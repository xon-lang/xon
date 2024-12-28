import {Text, TextReference} from '#common';
import {$OpenNode, OpenNode, corePackageType, lexicalNode} from '#core';

export type CharOpenNode = OpenNode & {__branding?: null};

export const $CharOpenNode = corePackageType<CharOpenNode>('CharOpenNode', $OpenNode);

export function charOpenNode(reference: TextReference, text: Text): CharOpenNode {
  return lexicalNode({$: $CharOpenNode, reference, text});
}
