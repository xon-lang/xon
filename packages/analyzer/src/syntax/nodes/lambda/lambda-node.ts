import {
  $AnalyzerType,
  $SyntaxNode,
  diagnoseLambdaNode,
  FormatterContext,
  GroupNode,
  HighlightContext,
  newSyntaxNode,
  OperatorExpressionNode,
  SemanticContext,
  SyntaxNode,
} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type LambdaNode = SyntaxNode &
  Brand<'Analyzer.LambdaNode'> & {
    parameters: GroupNode;
  } & (
    | {type: OperatorExpressionNode | Nothing; value?: OperatorExpressionNode | Nothing}
    | {type?: OperatorExpressionNode | Nothing; value: OperatorExpressionNode | Nothing}
  );

export const $LambdaNode = () => $AnalyzerType<LambdaNode>('LambdaNode', $SyntaxNode());

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
    diagnose: diagnoseLambdaNode,
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
