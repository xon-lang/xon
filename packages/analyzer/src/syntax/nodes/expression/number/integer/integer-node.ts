import {$AnalyzerType, $NumberNode, LexicalNode, newSyntaxNode, NumberNode} from '#analyzer';
import {Brand} from '#core';

export type IntegerNode = NumberNode &
  Brand<'Analyzer.IntegerNode'> & {
    token: LexicalNode;
  };

export const $IntegerNode = () => $AnalyzerType<IntegerNode>('IntegerNode', $NumberNode());

export function newIntegerNode(token: LexicalNode): IntegerNode {
  return newSyntaxNode({
    $: $IntegerNode(),
    range: token.range,
    token,
  });
}
