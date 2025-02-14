import {$StatementNode2, Node, StatementNode2, analyzerPackageType, newSyntaxNode} from '#analyzer';
import {ArrayData, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type ExpressionStatementNode = StatementNode2 &
  Brand<'Analyzer.ExpressionStatementNode'> & {
    expression: Node;
  };

export const $ExpressionStatementNode = analyzerPackageType<ExpressionStatementNode>(
  'ExpressionStatementNode',
  $StatementNode2,
);

export function newExpressionStatementNode(
  indent: Integer,
  expression: Node,
  errorNodes?: ArrayData<Node> | Nothing,
): ExpressionStatementNode {
  return newSyntaxNode<ExpressionStatementNode>({
    $: $ExpressionStatementNode,
    indent,
    expression,
    errorNodes,
  });
}
