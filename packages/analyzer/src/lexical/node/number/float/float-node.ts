import {
  $NumberNode,
  analyzerPackageType,
  IntegerContentNode,
  NumberNode,
  RadixPointNode,
  rangeFromNodes2,
} from '#analyzer';
import {newArrayData, Nothing} from '#common';
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
  const children = newArrayData([integerPartNode, radixPointNode, fractionalPartNode]).filter();
  const range = rangeFromNodes2(children);

  return {
    $: $FloatNode,
    isExpression: true,
    children,
    range,
    integerPartNode,
    radixPointNode,
    fractionalPartNode,
  };
}
