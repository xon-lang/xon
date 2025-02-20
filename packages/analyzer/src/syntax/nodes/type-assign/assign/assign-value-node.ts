import {$AnalyzerType, $SyntaxNode, AssignOperatorNode, newSyntaxNode, Node, SyntaxNode} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type AssignValueNode = SyntaxNode &
  Brand<'Analyzer.AssignValueNode'> & {
    operator: AssignOperatorNode;
    value?: Node | Nothing;
  };

export const $AssignValueNode = () => $AnalyzerType<AssignValueNode>('AssignValueNode', $SyntaxNode());

export function newAssignValueNode(operator: AssignOperatorNode, value?: Node | Nothing): AssignValueNode {
  return newSyntaxNode({$: $AssignValueNode(), operator, value});
}
