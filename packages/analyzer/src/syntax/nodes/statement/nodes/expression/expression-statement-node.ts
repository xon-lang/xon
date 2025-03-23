import {
  $AnalyzerType,
  $StatementNode,
  diagnoseExpressionStatementNode,
  FormatterContext,
  HighlightContext,
  newSyntaxNode,
  Node,
  semantifyExpressionStatementNode,
  StatementNode,
  SyntaxNode,
} from '#analyzer';
import {ArrayData, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type ExpressionStatementNode = StatementNode &
  Brand<'Analyzer.ExpressionStatementNode'> & {
    // todo change to ExpressionNode
    expression: SyntaxNode;
  };

export const $ExpressionStatementNode = () =>
  $AnalyzerType<ExpressionStatementNode>('ExpressionStatementNode', $StatementNode());

export function newExpressionStatementNode(
  indent: Integer,
  expression: SyntaxNode,
  errorNodes?: ArrayData<Node> | Nothing,
): ExpressionStatementNode {
  return newSyntaxNode<ExpressionStatementNode>({
    $: $ExpressionStatementNode(),
    indent,
    expression,
    errorNodes,

    semantify: semantifyExpressionStatementNode,
    diagnose: diagnoseExpressionStatementNode,
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
