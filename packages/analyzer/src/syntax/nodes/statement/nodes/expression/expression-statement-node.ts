import {
  $AnalyzerType,
  $SyntaxNode,
  FormatterContext,
  HighlightContext,
  newSyntaxNode,
  semantifyExpressionStatementNode,
  SyntaxNode,
} from '#analyzer';
import {Brand} from '#core';

export type ExpressionStatementNode = SyntaxNode &
  Brand<'Analyzer.ExpressionStatementNode'> & {
    // todo change to ExpressionNode
    expression: SyntaxNode;
  };

export const $ExpressionStatementNode = () =>
  $AnalyzerType<ExpressionStatementNode>('ExpressionStatementNode', $SyntaxNode());

export function newExpressionStatementNode(expression: SyntaxNode): ExpressionStatementNode {
  return newSyntaxNode<ExpressionStatementNode>({
    $: $ExpressionStatementNode(),
    expression,

    semantify: semantifyExpressionStatementNode,
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
