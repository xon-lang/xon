import {$AnalyzerType, $SyntaxNode, newSyntaxNode, Node, SyntaxNode, TypeOperatorNode} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type TypeValueNode = SyntaxNode &
  Brand<'Analyzer.TypeValueNode'> & {
    operator: TypeOperatorNode;
    value?: Node | Nothing;
  };

export const $TypeValueNode = () => $AnalyzerType<TypeValueNode>('TypeValueNode', $SyntaxNode());

export function newTypeValueNode(operator: TypeOperatorNode, value?: Node | Nothing): TypeValueNode {
  return newSyntaxNode({$: $TypeValueNode(), operator, value});
}
