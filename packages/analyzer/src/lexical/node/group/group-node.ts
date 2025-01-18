import {
  $SyntaxNode2,
  analyzerPackageType,
  GroupCloseNode,
  GroupItemNode,
  GroupOpenNode,
  newSyntaxNode,
  SyntaxNode2,
} from '#analyzer';
import {ArrayData, Nothing} from '#common';
import {Brand} from '#typing';

export type GroupNode = SyntaxNode2 &
  Brand<'Analyzer.GroupNode'> & {
    open: GroupOpenNode;
    items: ArrayData<GroupItemNode>;
    close?: GroupCloseNode | Nothing;
  };

// todo remove 'lambda' and use as simple object
export const $GroupNode = analyzerPackageType<GroupNode>('GroupNode', $SyntaxNode2);

export function newGroupNode(
  open: GroupOpenNode,
  items: ArrayData<GroupItemNode>,
  close: GroupCloseNode | Nothing,
): GroupNode {
  return newSyntaxNode({$: $GroupNode, open, items, close});
}

// function validate(analyzer: SyntaxAnalyzer, node: GroupNode): void {
//   if (!node.close) {
//     analyzer.diagnosticManager.addPredefinedDiagnostic(node.open.reference, (x) =>
//       x.expectCloseToken(node.open.text),
//     );
//   }

//   // if(node.items.length>1 && !node.items[0].value){
//   //   context.diagnosticManager.addPredefinedDiagnostic(node.range, (x)=>x.unexpectedExpression());
//   // }

//   for (const item of node.items.slice(0, -1)) {
//     if (!item.value) {
//       analyzer.diagnosticManager.addPredefinedDiagnostic((item.comma ?? node.open).reference, (x) =>
//         x.unexpectedExpression(),
//       );
//     }
//   }
// }
