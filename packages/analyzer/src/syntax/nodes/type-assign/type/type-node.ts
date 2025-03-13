import {$AnalyzerType, $InfixNode, newSyntaxNode, Node, SyntaxNode, TypeExpressionNode} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type TypeNode = SyntaxNode &
  Brand<'Analyzer.TypeNode'> & {
    target?: Node | Nothing;
    type: TypeExpressionNode;
  };

export const $TypeNode = () => $AnalyzerType<TypeNode>('TypeNode', $InfixNode());

export function newTypeNode(target: Node | Nothing, type: TypeExpressionNode): TypeNode {
  return newSyntaxNode({$: $TypeNode(), target, type});
}
