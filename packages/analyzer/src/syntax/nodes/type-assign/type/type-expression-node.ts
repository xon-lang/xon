import {$AnalyzerType, $SyntaxNode, newSyntaxNode, Node, SyntaxNode, TypeOperatorNode} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type TypeExpressionNode = SyntaxNode &
  Brand<'Analyzer.TypeExpressionNode'> & {
    operator: TypeOperatorNode;
    expression?: Node | Nothing;
  };

export const $TypeExpressionNode = () =>
  $AnalyzerType<TypeExpressionNode>('TypeExpressionNode', $SyntaxNode());

export function newTypeExpressionNode(
  operator: TypeOperatorNode,
  expression?: Node | Nothing,
): TypeExpressionNode {
  return newSyntaxNode({$: $TypeExpressionNode(), operator, expression});
}
