import {Boolean2, Integer, newTextReference, Nothing, rangeFromNodes} from '#common';
import {
  $SyntaxNode,
  CommaNode,
  corePackageType,
  Node,
  StatementNode,
  SyntaxAnalyzer,
  SyntaxNode,
} from '#core';

export type ItemNode = SyntaxNode & {
  index: Integer;
  value: Node | Nothing;
  comma: CommaNode | Nothing;
  statements: StatementNode[];
};

export const $ItemNode = corePackageType<ItemNode>('ItemNode', $SyntaxNode);

export function itemNode(
  analyzer: SyntaxAnalyzer,
  index: Integer,
  comma: CommaNode | Nothing,
  statements: StatementNode[],
): ItemNode {
  const children = comma ? [comma, ...statements] : [...statements];
  const reference = newTextReference(analyzer.resource, rangeFromNodes(children));

  const node: ItemNode = {
    $: $ItemNode,
    reference,
    children,
    index,
    value: statements.first()?.value,
    comma,
    statements,

    equals(other: ItemNode): Boolean2 {
      return this.reference.equals(other.reference);
    },
  };

  children.forEach((x) => (x.parent = node));

  format(analyzer, node);

  return node;
}

function format(analyzer: SyntaxAnalyzer, node: ItemNode): void {
  if (node.comma) {
    analyzer.formatterManager.formatChildNode(node.comma, false);
  }
}
