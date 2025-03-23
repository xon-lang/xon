import {
  $AnalyzerType,
  $ExpressionNode,
  DiagnosticContext,
  ExpressionNode,
  FormatterContext,
  GroupCloseNode,
  GroupItemNode,
  GroupOpenNode,
  HighlightContext,
  newSyntaxNode,
  SemanticContext,
} from '#analyzer';
import {ArrayData, Nothing} from '#common';
import {$Type, Brand} from '#typing';

export type GroupNode = ExpressionNode &
  Brand<'Analyzer.GroupNode'> & {
    open: GroupOpenNode;
    items: ArrayData<GroupItemNode>;
    close?: GroupCloseNode | Nothing;
  };

// todo remove 'lambda' and use as simple object
export const $GroupNode = () => $AnalyzerType<GroupNode>('GroupNode', $ExpressionNode());

export function newGroupNode(
  $type: $Type,
  open: GroupOpenNode,
  items: ArrayData<GroupItemNode>,
  close: GroupCloseNode | Nothing,
): GroupNode {
  return newSyntaxNode({
    $: $type,
    open,
    items,
    close,

    semantify(context: SemanticContext): void {},
    diagnose(context: DiagnosticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
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
