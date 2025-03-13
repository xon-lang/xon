import {
  $AnalyzerType,
  $SyntaxNode,
  AssignExpressionNode,
  diagnoseLambdaNode,
  GroupNode,
  newSyntaxNode,
  SyntaxNode,
  TypeExpressionNode,
} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type LambdaNode = SyntaxNode &
  Brand<'Analyzer.LambdaNode'> & {
    parameters: GroupNode;
  } & (
    | {type: TypeExpressionNode | Nothing; assign?: AssignExpressionNode | Nothing}
    | {type?: TypeExpressionNode | Nothing; assign: AssignExpressionNode | Nothing}
  );

export const $LambdaNode = () => $AnalyzerType<LambdaNode>('LambdaNode', $SyntaxNode());

export function newLambdaNode(
  parameters: GroupNode,
  type?: TypeExpressionNode | Nothing,
  assign?: AssignExpressionNode | Nothing,
): LambdaNode {
  return newSyntaxNode<LambdaNode>({
    $: $LambdaNode(),
    parameters,
    type,
    assign,

    diagnose: diagnoseLambdaNode,
  });
}
