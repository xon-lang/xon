import {$OpenNode, OpenNode, analyzerPackageType, lexicalNode} from '#analyzer';
import {Text, TextReference} from '#common';
import {Brand} from '#typing';

export type CharOpenNode = OpenNode & Brand<'Core.CharOpenNode'>;

export const $CharOpenNode = analyzerPackageType<CharOpenNode>('CharOpenNode', $OpenNode);

export function charOpenNode(reference: TextReference, text: Text): CharOpenNode {
  return lexicalNode({$: $CharOpenNode, reference, text});
}
