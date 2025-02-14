import {$StatementNode, Node, StatementNode, analyzerPackageType, newSyntaxNode} from '#analyzer';
import {ArrayData, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type ExpressionStatementNode = StatementNode &
  Brand<'Analyzer.ExpressionStatementNode'> & {
    expression: Node;
  };

export const $ExpressionStatementNode = analyzerPackageType<ExpressionStatementNode>(
  'ExpressionStatementNode',
  $StatementNode,
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
