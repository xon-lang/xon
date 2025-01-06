import {$OpenNode, OpenNode, analyzerPackageType, lexicalNode} from '#analyzer';
import {Text, TextReference} from '#common';
import {Brand} from '#typing';

export type BraceOpenNode = OpenNode & Brand<'Core.BraceOpenNode'>;

export const $BraceOpenNode = analyzerPackageType<BraceOpenNode>('BraceOpenNode', $OpenNode);

export function braceOpenNode(reference: TextReference, text: Text): BraceOpenNode {
  return lexicalNode({$: $BraceOpenNode, reference, text});
}
