import {ArrayData, Boolean2, newArrayData, newTextReference, Nothing, rangeFromNodes} from '#common';
import {CloseNode, GroupNode, ItemNode, OpenNode, SyntaxAnalyzer} from '#core';
import {$Type} from '#typing';

export function groupNode(
  analyzer: SyntaxAnalyzer,
  $groupType: $Type,
  open: OpenNode,
  items: ArrayData<ItemNode>,
  close: CloseNode | Nothing,
): GroupNode {
  const children = newArrayData(close ? [open, ...items, close] : [open, ...items]);
  const reference = newTextReference(analyzer.resource, rangeFromNodes(children));

  const node: GroupNode = {
    $: $groupType,
    reference,
    children,
    open,
    items,
    close,
    isExpression: true,

    equals(other: GroupNode): Boolean2 {
      return this.reference.equals(other.reference);
    },
  };

  for (const child of children) {
    child.parent = node;
  }

  validate(analyzer, node);

  return node;
}

function validate(analyzer: SyntaxAnalyzer, node: GroupNode): void {
  if (!node.close) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.open.reference, (x) =>
      x.expectCloseToken(node.open.text.toNativeString()),
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
