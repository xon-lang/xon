import {
  $AnalyzerType,
  $ExpressionNode,
  ExpressionNode,
  FormatterContext,
  GroupNode,
  HighlightContext,
  newSyntaxNode,
  OperatorExpressionNode,
  SemanticContext,
} from '#analyzer';
import {Brand, Nothing} from '#core';

export type LambdaNode = ExpressionNode &
  Brand<'Analyzer.LambdaNode'> & {
    group: GroupNode;
  } & (
    | {type: OperatorExpressionNode | Nothing; value?: OperatorExpressionNode | Nothing}
    | {type?: OperatorExpressionNode | Nothing; value: OperatorExpressionNode | Nothing}
  );

export const $LambdaNode = () => $AnalyzerType<LambdaNode>('LambdaNode', $ExpressionNode());

export function newLambdaNode(
  group: GroupNode,
  type?: OperatorExpressionNode | Nothing,
  value?: OperatorExpressionNode | Nothing,
): LambdaNode {
  return newSyntaxNode<LambdaNode>({
    $: $LambdaNode(),
    group,
    type,
    value,

    semantify(context: SemanticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
