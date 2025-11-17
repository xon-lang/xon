import {
  $AnalyzerType,
  $StatementNode,
  FormatterContext,
  HighlightContext,
  newSyntaxNode,
  semantifyExpressionStatementNode,
  StatementNode,
  SyntaxNode,
} from '#analyzer';
import {Brand} from '#core';

export type ExpressionStatementNode = StatementNode &
  Brand<'Analyzer.ExpressionStatementNode'> & {
    // todo change to ExpressionNode
    expression: SyntaxNode;
  };

export const $ExpressionStatementNode = () =>
  $AnalyzerType<ExpressionStatementNode>('ExpressionStatementNode', $StatementNode());

export function newExpressionStatementNode(expression: SyntaxNode): ExpressionStatementNode {
  return newSyntaxNode<ExpressionStatementNode>({
    $: $ExpressionStatementNode(),
    expression,

    semantify: semantifyExpressionStatementNode,
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
