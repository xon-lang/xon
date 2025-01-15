import {
  $SyntaxNode2,
  analyzerPackageType,
  CommaNode,
  newSyntaxNode,
  Node,
  StatementNode,
  SyntaxNode2,
} from '#analyzer';
import {ArrayData, Nothing} from '#common';
import {Brand} from '#typing';

export type GroupItemNode = SyntaxNode2 &
  Brand<'Analyzer.GroupItemNode'> & {
    comma: CommaNode | Nothing;
    // todo use 'Node' or 'BodyNode' instead of 'statements'
    statements: ArrayData<StatementNode>;
    // todo make value as function ???
    value: Node | Nothing;
  };

export const $GroupItemNode = analyzerPackageType<GroupItemNode>('GroupItemNode', $SyntaxNode2);

export function newItemNode(comma: CommaNode | Nothing, statements: ArrayData<StatementNode>): GroupItemNode {
  const value = statements.first()?.value;

  return newSyntaxNode({$: $GroupItemNode, comma, statements, value});
}

// function format(analyzer: SyntaxAnalyzer, node: ItemNode): void {
//   if (node.comma) {
//     analyzer.formatterManager.formatChildNode(node.comma, false);
//   }
// }
