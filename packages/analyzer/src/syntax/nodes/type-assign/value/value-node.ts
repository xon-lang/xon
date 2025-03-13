import {$AnalyzerType, $InfixNode, newSyntaxNode, Node, OperatorExpressionNode, SyntaxNode} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type ValueNode = SyntaxNode &
  Brand<'Analyzer.ValueNode'> & {
    target?: Node | Nothing;
    value: OperatorExpressionNode;
  };

export const $ValueNode = () => $AnalyzerType<ValueNode>('ValueNode', $InfixNode());

export function newValueNode(target: Node | Nothing, value: OperatorExpressionNode): ValueNode {
  return newSyntaxNode({$: $ValueNode(), target, value});
}
