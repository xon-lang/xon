import {$AnalyzerType, $InfixNode, newSyntaxNode, Node, SyntaxNode, TypeValueNode} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type TypeNode = SyntaxNode &
  Brand<'Analyzer.TypeNode'> & {
    target?: Node | Nothing;
    type: TypeValueNode;
  };

export const $TypeNode = () => $AnalyzerType<TypeNode>('TypeNode', $InfixNode());

export function newTypeNode(target: Node | Nothing, type: TypeValueNode): TypeNode {
  return newSyntaxNode({$: $TypeNode(), target, type});
}
