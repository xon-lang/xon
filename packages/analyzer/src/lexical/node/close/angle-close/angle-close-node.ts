import {$CloseNode, CloseNode, analyzerPackageType, lexicalNode} from '#analyzer';
import {Text, TextReference} from '#common';
import {Brand} from '#typing';

export type AngleCloseNode = CloseNode & Brand<'Analyzer.AngleCloseNode'>;

export const $AngleCloseNode = analyzerPackageType<AngleCloseNode>('AngleCloseNode', $CloseNode);

export function angleCloseNode(reference: TextReference, text: Text): AngleCloseNode {
  return lexicalNode({$: $AngleCloseNode, reference, text});
}
