import {$AnalyzerType, $SyntaxNode, AssignOperatorNode, newSyntaxNode, Node, SyntaxNode} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type AssignExpressionNode = SyntaxNode &
  Brand<'Analyzer.AssignExpressionNode'> & {
    operator: AssignOperatorNode;
    expression?: Node | Nothing;
  };

export const $AssignExpressionNode = () =>
  $AnalyzerType<AssignExpressionNode>('AssignExpressionNode', $SyntaxNode());

export function newAssignExpressionNode(
  operator: AssignOperatorNode,
  expression?: Node | Nothing,
): AssignExpressionNode {
  return newSyntaxNode({$: $AssignExpressionNode(), operator, expression});
}
