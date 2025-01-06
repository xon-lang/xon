import {
  $SyntaxNode,
  CommaNode,
  corePackageType,
  Node,
  StatementNode,
  SyntaxAnalyzer,
  SyntaxNode,
} from '#analyzer';
import {ArrayData, Boolean2, Integer, newArrayData, newTextReference, Nothing, rangeFromNodes} from '#common';

export type ItemNode = SyntaxNode & {
  index: Integer;
  value: Node | Nothing;
  comma: CommaNode | Nothing;
  statements: ArrayData<StatementNode>;
};

export const $ItemNode = corePackageType<ItemNode>('ItemNode', $SyntaxNode);

export function itemNode(
  analyzer: SyntaxAnalyzer,
  index: Integer,
  comma: CommaNode | Nothing,
  statements: ArrayData<StatementNode>,
): ItemNode {
  const children = newArrayData(comma ? [comma, ...statements] : [...statements]);
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

  for (const child of children) {
    child.parent = node;
  }

  format(analyzer, node);

  return node;
}

function format(analyzer: SyntaxAnalyzer, node: ItemNode): void {
  if (node.comma) {
    analyzer.formatterManager.formatChildNode(node.comma, false);
  }
}
