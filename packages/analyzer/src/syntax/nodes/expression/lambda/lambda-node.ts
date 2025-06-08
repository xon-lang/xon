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
import {Nothing} from '#common';
import {Brand} from '#typing';

export type LambdaNode = ExpressionNode &
  Brand<'Analyzer.LambdaNode'> & {
    parameters: GroupNode;
  } & (
    | {type: OperatorExpressionNode | Nothing; value?: OperatorExpressionNode | Nothing}
    | {type?: OperatorExpressionNode | Nothing; value: OperatorExpressionNode | Nothing}
  );

export const $LambdaNode = () => $AnalyzerType<LambdaNode>('LambdaNode', $ExpressionNode());

export function newLambdaNode(
  parameters: GroupNode,
  type?: OperatorExpressionNode | Nothing,
  value?: OperatorExpressionNode | Nothing,
): LambdaNode {
  return newSyntaxNode<LambdaNode>({
    $: $LambdaNode(),
    parameters,
    type,
    value,

    semantify(context: SemanticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
