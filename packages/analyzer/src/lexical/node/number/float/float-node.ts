import {
  $NumberNode,
  analyzerPackageType,
  IntegerContentNode,
  newSyntaxNode,
  NumberNode,
  RadixPointNode,
} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type FloatNode = NumberNode &
  Brand<'Analyzer.FloatNode'> & {
    integerPartNode: IntegerContentNode;
    radixPointNode?: RadixPointNode | Nothing;
    fractionalPartNode?: IntegerContentNode | Nothing;
  };

export const $FloatNode = analyzerPackageType<FloatNode>('FloatNode', $NumberNode);

export function newFloatNode(
  integerPartNode: IntegerContentNode,
  radixPointNode?: RadixPointNode | Nothing,
  fractionalPartNode?: IntegerContentNode | Nothing,
): FloatNode {
  return newSyntaxNode({
    $: $FloatNode,
    integerPartNode,
    radixPointNode,
    fractionalPartNode,
  });
}
