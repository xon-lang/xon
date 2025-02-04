import {$StatementNode2, Node2, StatementNode2, analyzerPackageType, newSyntaxNode} from '#analyzer';
import {ArrayData, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type ExpressionStatementNode = StatementNode2 &
  Brand<'Analyzer.ExpressionStatementNode'> & {
    node: Node2;
  };

export const $ExpressionStatementNode = analyzerPackageType<ExpressionStatementNode>(
  'ExpressionStatementNode',
  $StatementNode2,
);

export function newExpressionStatementNode(
  indent: Integer,
  node: Node2,
  errorNodes?: ArrayData<Node2> | Nothing,
): ExpressionStatementNode {
  return newSyntaxNode<ExpressionStatementNode>({
    $: $ExpressionStatementNode,
    indent,
    node,
    errorNodes,
  });
}
