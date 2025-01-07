import {$CloseNode, CloseNode, analyzerPackageType, lexicalNode} from '#analyzer';
import {Text, TextReference} from '#common';
import {Brand} from '#typing';

export type ParenCloseNode = CloseNode & Brand<'Analyzer.ParenCloseNode'>;

export const $ParenCloseNode = analyzerPackageType<ParenCloseNode>('ParenCloseNode', $CloseNode);

export function parenCloseNode(reference: TextReference, text: Text): ParenCloseNode {
  return lexicalNode({$: $ParenCloseNode, reference, text});
}
