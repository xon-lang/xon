import {
  $ExpressionStatementNode,
  $SyntaxNode,
  analyzerPackageType,
  CommaNode,
  newSyntaxNode,
  Node,
  StatementNode,
  SyntaxNode,
} from '#analyzer';
import {ArrayData, Nothing} from '#common';
import {Brand, is} from '#typing';

export type GroupItemNode = SyntaxNode &
  Brand<'Analyzer.GroupItemNode'> & {
    statements: ArrayData<StatementNode>;
    comma?: CommaNode | Nothing;
    value?: Node | Nothing;
  };

export const $GroupItemNode = analyzerPackageType<GroupItemNode>('GroupItemNode', $SyntaxNode);

export function newItemNode(
  statements: ArrayData<StatementNode>,
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
