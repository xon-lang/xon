import {
  $AnalyzerType,
  $SyntaxNode,
  diagnoseLambdaNode,
  GroupNode,
  newSyntaxNode,
  OperatorExpressionNode,
  SyntaxNode,
  ValueExpressionNode,
} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type LambdaNode = SyntaxNode &
  Brand<'Analyzer.LambdaNode'> & {
    parameters: GroupNode;
  } & (
    | {type: OperatorExpressionNode | Nothing; value?: ValueExpressionNode | Nothing}
    | {type?: OperatorExpressionNode | Nothing; value: ValueExpressionNode | Nothing}
  );

export const $LambdaNode = () => $AnalyzerType<LambdaNode>('LambdaNode', $SyntaxNode());

export function newLambdaNode(
  parameters: GroupNode,
  type?: OperatorExpressionNode | Nothing,
  value?: ValueExpressionNode | Nothing,
): LambdaNode {
  return newSyntaxNode<LambdaNode>({
    $: $LambdaNode(),
    parameters,
    type,
    value,

    diagnose: diagnoseLambdaNode,
  });
}
