import {Nothing, rangeFromNodes, textResourceRange} from '#common';
import {
  CloseNode,
  CloseNodeType,
  ExpressionNode,
  ItemNode,
  OpenNode,
  OpenNodeType,
  SyntaxAnalyzer,
  SyntaxNode,
} from '#core';
import {$} from '#typing';

export type GroupNodeType = $.ParenGroupNode | $.BracketGroupNode | $.BraceGroupNode | $.AngleGroupNode;

export type GroupNode<
  GroupType extends GroupNodeType = GroupNodeType,
  OpenType extends OpenNodeType = OpenNodeType,
  CloseType extends CloseNodeType = CloseNodeType,
> = SyntaxNode<GroupType> &
  ExpressionNode & {
    open: OpenNode<OpenType>;
    items: ItemNode[];
    close: CloseNode<CloseType> | Nothing;
  };

export function groupNode<
  GroupType extends GroupNodeType,
  OpenType extends OpenNodeType,
  CloseType extends CloseNodeType,
>(
  analyzer: SyntaxAnalyzer,
  $: GroupType,
  open: OpenNode<OpenType>,
  items: ItemNode[],
  close: CloseNode<CloseType> | Nothing,
): GroupNode<GroupType, OpenType, CloseType> {
  const children = close ? [open, ...items, close] : [open, ...items];
  const reference = textResourceRange(analyzer.resource, rangeFromNodes(children));

  const node: GroupNode<GroupType, OpenType, CloseType> = {
    $,
    reference,
    children,
    open,
    items,
    close,
  };

  children.forEach((x) => (x.parent = node));

  validate(analyzer, node);

  return node;
}

function validate(analyzer: SyntaxAnalyzer, node: GroupNode): void {
  if (!node.close) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.open.reference, (x) =>
      x.expectCloseToken(node.open.text.toString()),
    );
  }

  // if(node.items.length>1 && !node.items[0].value){
  //   context.diagnosticManager.addPredefinedDiagnostic(node.range, (x)=>x.unexpectedExpression());
  // }

  for (const item of node.items.slice(0, -1)) {
    if (!item.value) {
      analyzer.diagnosticManager.addPredefinedDiagnostic((item.comma ?? node.open).reference, (x) =>
        x.unexpectedExpression(),
      );
    }
  }
}
