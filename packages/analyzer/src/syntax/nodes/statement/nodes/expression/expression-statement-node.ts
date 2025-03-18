import {
  $AnalyzerType,
  $StatementNode,
  diagnoseExpressionStatementNode,
  newSyntaxNode,
  Node,
  semantifyExpressionStatementNode,
  StatementNode,
} from '#analyzer';
import {ArrayData, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type ExpressionStatementNode = StatementNode &
  Brand<'Analyzer.ExpressionStatementNode'> & {
    expression: Node;
  };

export const $ExpressionStatementNode = () =>
  $AnalyzerType<ExpressionStatementNode>('ExpressionStatementNode', $StatementNode());

export function newExpressionStatementNode(
  indent: Integer,
  expression: Node,
  errorNodes?: ArrayData<Node> | Nothing,
): ExpressionStatementNode {
  return newSyntaxNode<ExpressionStatementNode>({
    $: $ExpressionStatementNode(),
    indent,
    expression,
    errorNodes,

    semantify: semantifyExpressionStatementNode,
    diagnose: diagnoseExpressionStatementNode,
  });
}
