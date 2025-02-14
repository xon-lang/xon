import {
  $ExpressionStatementNode,
  $SyntaxNode2,
  analyzerPackageType,
  CommaNode,
  newSyntaxNode,
  Node2,
  StatementNode2,
  SyntaxNode2,
} from '#analyzer';
import {ArrayData, Nothing} from '#common';
import {Brand, is} from '#typing';

export type GroupItemNode = SyntaxNode2 &
  Brand<'Analyzer.GroupItemNode'> & {
    statements: ArrayData<StatementNode2>;
    comma?: CommaNode | Nothing;
    value?: Node2 | Nothing;
  };

export const $GroupItemNode = analyzerPackageType<GroupItemNode>('GroupItemNode', $SyntaxNode2);

export function newItemNode(
  statements: ArrayData<StatementNode2>,
  comma?: CommaNode | Nothing,
): GroupItemNode {
  const node: GroupItemNode = newSyntaxNode({$: $GroupItemNode, statements, comma});
  const firstStatement = statements.first();

  if (is(firstStatement, $ExpressionStatementNode)) {
    node.value = firstStatement.expression;
  }

  return node;
}

// function format(analyzer: SyntaxAnalyzer, node: ItemNode): void {
//   if (node.comma) {
//     analyzer.formatterManager.formatChildNode(node.comma, false);
//   }
// }
