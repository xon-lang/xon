import {
  $AnalyzerType,
  $SyntaxNode,
  AssignValueNode,
  diagnoseLambdaNode,
  GroupNode,
  newSyntaxNode,
  SyntaxNode,
  TypeValueNode,
} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type LambdaNode = SyntaxNode &
  Brand<'Analyzer.LambdaNode'> & {
    group: GroupNode;
  } & (
    | {type: TypeValueNode | Nothing; assign?: AssignValueNode | Nothing}
    | {type?: TypeValueNode | Nothing; assign: AssignValueNode | Nothing}
  );

export const $LambdaNode = () => $AnalyzerType<LambdaNode>('LambdaNode', $SyntaxNode());

export function newLambdaNode(
  group: GroupNode,
  type?: TypeValueNode | Nothing,
  assign?: AssignValueNode | Nothing,
): LambdaNode {
  return newSyntaxNode<LambdaNode>({
    $: $LambdaNode(),
    group,
    type,
    assign,

    diagnose: diagnoseLambdaNode,
  });
}
