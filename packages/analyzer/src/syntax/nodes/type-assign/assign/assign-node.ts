import {$AnalyzerType, $InfixNode, AssignExpressionNode, newSyntaxNode, Node, SyntaxNode} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type AssignNode = SyntaxNode &
  Brand<'Analyzer.AssignNode'> & {
    target?: Node | Nothing;
    assign: AssignExpressionNode;
  };

export const $AssignNode = () => $AnalyzerType<AssignNode>('AssignNode', $InfixNode());

export function newAssignNode(target: Node | Nothing, assign: AssignExpressionNode): AssignNode {
  return newSyntaxNode({$: $AssignNode(), target, assign});
}
