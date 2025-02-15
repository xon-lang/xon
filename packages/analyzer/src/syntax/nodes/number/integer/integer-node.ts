import {$AnalyzerType, $NumberNode, IntegerContentNode, newSyntaxNode, NumberNode} from '#analyzer';
import {Brand} from '#typing';

export type IntegerNode = NumberNode &
  Brand<'Analyzer.IntegerNode'> & {
    contentNode: IntegerContentNode;
  };

export const $IntegerNode = () => $AnalyzerType<IntegerNode>('IntegerNode', $NumberNode());

export function newIntegerNode(contentNode: IntegerContentNode): IntegerNode {
  return newSyntaxNode({$: $IntegerNode(), canBeExpression: true, contentNode});
}
