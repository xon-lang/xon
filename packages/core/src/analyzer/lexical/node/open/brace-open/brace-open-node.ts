import {Text, TextReference} from '#common';
import {$OpenNode, OpenNode, corePackageType, lexicalNode} from '#core';
import {Brand} from '#typing';

export type BraceOpenNode = OpenNode & Brand<'Core.BraceOpenNode'>;

export const $BraceOpenNode = corePackageType<BraceOpenNode>('BraceOpenNode', $OpenNode);

export function braceOpenNode(reference: TextReference, text: Text): BraceOpenNode {
  return lexicalNode({$: $BraceOpenNode, reference, text});
}
