import {
  $AnalyzerType,
  $SyntaxNode,
  DiagnosticContext,
  ExpressionNode,
  FormatterContext,
  HighlightContext,
  newSyntaxNode,
  SemanticContext,
  SyntaxNode,
  TypeOperatorNode,
} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type OperatorExpressionNode = SyntaxNode &
  Brand<'Analyzer.OperatorExpressionNode'> & {
    operator: TypeOperatorNode;
    expression?: ExpressionNode | Nothing;
  };

export const $OperatorExpressionNode = () =>
  $AnalyzerType<OperatorExpressionNode>('OperatorExpressionNode', $SyntaxNode());

export function newOperatorExpressionNode(
  operator: TypeOperatorNode,
  expression?: ExpressionNode | Nothing,
): OperatorExpressionNode {
  return newSyntaxNode({
    $: $OperatorExpressionNode(),
    operator,
    expression,

    semantify(context: SemanticContext): void {},
    diagnose(context: DiagnosticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
