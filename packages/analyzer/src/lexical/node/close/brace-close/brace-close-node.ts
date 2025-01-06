import {$CloseNode, CloseNode, corePackageType, lexicalNode} from '#analyzer';
import {Text, TextReference} from '#common';
import {Brand} from '#typing';

export type BraceCloseNode = CloseNode & Brand<'Core.BraceCloseNode'>;

export const $BraceCloseNode = corePackageType<BraceCloseNode>('BraceCloseNode', $CloseNode);

export function braceCloseNode(reference: TextReference, text: Text): BraceCloseNode {
  return lexicalNode({$: $BraceCloseNode, reference, text});
}
