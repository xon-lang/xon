import {$OpenNode, OpenNode, analyzerPackageType, lexicalNode} from '#analyzer';
import {Text, TextReference} from '#common';
import {Brand} from '#typing';

export type AngleOpenNode = OpenNode & Brand<'Analyzer.AngleOpenNode'>;

export const $AngleOpenNode = analyzerPackageType<AngleOpenNode>('AngleOpenNode', $OpenNode);

export function angleOpenNode(reference: TextReference, text: Text): AngleOpenNode {
  return lexicalNode({$: $AngleOpenNode, reference, text});
}
