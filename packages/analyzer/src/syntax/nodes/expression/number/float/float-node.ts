import {
  $AnalyzerType,
  $NumberNode,
  IntegerContentNode,
  newSyntaxNode,
  nodesRange,
  NumberNode,
  RadixPointNode,
} from '#analyzer';
import {Brand, Nothing} from '#core';

export type FloatNode = NumberNode &
  Brand<'Analyzer.FloatNode'> & {
    integer: IntegerContentNode;
    radix?: RadixPointNode | Nothing;
    fraction?: IntegerContentNode | Nothing;
  };

export const $FloatNode = () => $AnalyzerType<FloatNode>('FloatNode', $NumberNode());

export function newFloatNode(
  integer: IntegerContentNode,
  radix?: RadixPointNode | Nothing,
  fraction?: IntegerContentNode | Nothing,
): FloatNode {
  return newSyntaxNode({
    $: $FloatNode(),
    range: nodesRange(integer, radix, fraction),

    integer,
    radix,
    fraction,
  });
}
