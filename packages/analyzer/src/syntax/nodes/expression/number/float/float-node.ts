import {$AnalyzerType, $NumberNode, LexicalNode, newSyntaxNode, nodesRange, NumberNode} from '#analyzer';
import {Brand, Nothing} from '#core';

export type FloatNode = NumberNode &
  Brand<'Analyzer.FloatNode'> & {
    integer: LexicalNode;
    radix?: LexicalNode | Nothing;
    fraction?: LexicalNode | Nothing;
  };

export const $FloatNode = () => $AnalyzerType<FloatNode>('FloatNode', $NumberNode());

export function newFloatNode(
  integer: LexicalNode,
  radix?: LexicalNode | Nothing,
  fraction?: LexicalNode | Nothing,
): FloatNode {
  return newSyntaxNode({
    $: $FloatNode(),
    range: nodesRange(integer, radix, fraction),

    integer,
    radix,
    fraction,
  });
}
