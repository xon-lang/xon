import {$AnalyzerType, $InfixNode, newSyntaxNode, Node, OperatorExpressionNode, SyntaxNode} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type TypeNode = SyntaxNode &
  Brand<'Analyzer.TypeNode'> & {
    target?: Node | Nothing;
    type: OperatorExpressionNode;
  };

export const $TypeNode = () => $AnalyzerType<TypeNode>('TypeNode', $InfixNode());

export function newTypeNode(target: Node | Nothing, type: OperatorExpressionNode): TypeNode {
  return newSyntaxNode({$: $TypeNode(), target, type});
}
