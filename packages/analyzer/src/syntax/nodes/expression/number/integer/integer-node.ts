import {$AnalyzerType, $NumberNode, IntegerContentNode, newSyntaxNode, nodesRange, NumberNode} from '#analyzer';
import {Brand} from '#core';

export type IntegerNode = NumberNode &
  Brand<'Analyzer.IntegerNode'> & {
    content: IntegerContentNode;
  };

export const $IntegerNode = () => $AnalyzerType<IntegerNode>('IntegerNode', $NumberNode());

export function newIntegerNode(content: IntegerContentNode): IntegerNode {
  return newSyntaxNode({
    $: $IntegerNode(),
    range: nodesRange(content),
    content,
  });
}
