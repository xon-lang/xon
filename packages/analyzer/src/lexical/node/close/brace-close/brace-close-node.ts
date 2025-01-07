import {$CloseNode, CloseNode, analyzerPackageType, lexicalNode} from '#analyzer';
import {Text, TextReference} from '#common';
import {Brand} from '#typing';

export type BraceCloseNode = CloseNode & Brand<'Analyzer.BraceCloseNode'>;

export const $BraceCloseNode = analyzerPackageType<BraceCloseNode>('BraceCloseNode', $CloseNode);

export function braceCloseNode(reference: TextReference, text: Text): BraceCloseNode {
  return lexicalNode({$: $BraceCloseNode, reference, text});
}
