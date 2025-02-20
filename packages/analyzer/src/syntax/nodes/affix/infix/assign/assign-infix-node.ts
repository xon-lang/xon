import {$AnalyzerType, $InfixNode, AssignOperatorNode, InfixNode, newSyntaxNode, Node} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type AssignInfixNode = InfixNode &
  Brand<'Analyzer.AssignInfixNode'> & {
    leftNode: Node;
    operator: AssignOperatorNode;
    rightNode?: Node | Nothing;
  };

export const $AssignInfixNode = () => $AnalyzerType<AssignInfixNode>('AssignInfixNode', $InfixNode());

export function newAssignInfixNode(
  leftNode: Node,
  operatorNode: AssignOperatorNode,
  rightNode?: Node | Nothing,
): AssignInfixNode {
  return newSyntaxNode({$: $AssignInfixNode(), canBeExpression: false, leftNode, operatorNode, rightNode});
}
