import {$CloseNode, CloseNode, analyzerPackageType, lexicalNode} from '#analyzer';
import {Text, TextReference} from '#common';
import {Brand} from '#typing';

export type CharCloseNode = CloseNode & Brand<'Analyzer.CharCloseNode'>;

export const $CharCloseNode = analyzerPackageType<CharCloseNode>('CharCloseNode', $CloseNode);

export function charCloseNode(reference: TextReference, text: Text): CharCloseNode {
  return lexicalNode({$: $CharCloseNode, reference, text});
}
