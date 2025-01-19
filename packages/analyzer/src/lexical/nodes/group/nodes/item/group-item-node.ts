import {
  $SyntaxNode2,
  analyzerPackageType,
  CommaNode,
  newSyntaxNode,
  Node2,
  StatementNode2,
  SyntaxNode2,
} from '#analyzer';
import {ArrayData, Nothing} from '#common';
import {Brand} from '#typing';

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
  node.value = statements.first()?.value;

  return node;
}

// function format(analyzer: SyntaxAnalyzer, node: ItemNode): void {
//   if (node.comma) {
//     analyzer.formatterManager.formatChildNode(node.comma, false);
//   }
// }
