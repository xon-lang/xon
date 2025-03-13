import {$AnalyzerType, $SyntaxNode, newSyntaxNode, Node, SyntaxNode, TypeOperatorNode} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type OperatorExpressionNode = SyntaxNode &
  Brand<'Analyzer.OperatorExpressionNode'> & {
    operator: TypeOperatorNode;
    expression?: Node | Nothing;
  };

export const $OperatorExpressionNode = () =>
  $AnalyzerType<OperatorExpressionNode>('OperatorExpressionNode', $SyntaxNode());

export function newOperatorExpressionNode(
  operator: TypeOperatorNode,
  expression?: Node | Nothing,
): OperatorExpressionNode {
  return newSyntaxNode({$: $OperatorExpressionNode(), operator, expression});
}
