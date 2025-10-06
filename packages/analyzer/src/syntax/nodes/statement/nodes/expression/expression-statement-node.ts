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
import {Integer} from '#common';
import {Brand} from '#typing';

export type ExpressionStatementNode = StatementNode &
  Brand<'Analyzer.ExpressionStatementNode'> & {
    // todo change to ExpressionNode
    expression: SyntaxNode;
  };

export const $ExpressionStatementNode = () =>
  $AnalyzerType<ExpressionStatementNode>('ExpressionStatementNode', $StatementNode());

export function newExpressionStatementNode(indent: Integer, expression: SyntaxNode): ExpressionStatementNode {
  return newSyntaxNode<ExpressionStatementNode>({
    $: $ExpressionStatementNode(),
    indent,
    expression,

    semantify: semantifyExpressionStatementNode,
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
