import {$OpenNode, OpenNode, analyzerPackageType, lexicalNode} from '#analyzer';
import {Text, TextReference} from '#common';
import {Brand} from '#typing';

export type StringOpenNode = OpenNode & Brand<'Analyzer.StringOpenNode'>;

export const $StringOpenNode = analyzerPackageType<StringOpenNode>('StringOpenNode', $OpenNode);

export function stringOpenNode(reference: TextReference, text: Text): StringOpenNode {
  return lexicalNode({$: $StringOpenNode, reference, text});
}
