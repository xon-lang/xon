import {Integer, Nothing, rangeFromNodes, textResourceRange} from '#/common';
import {CommaNode, Node, StatementNode, SyntaxAnalyzer, SyntaxNode} from '#/core';
import {$} from '#/typing';

export type ItemNode = SyntaxNode<$.ItemNode> & {
  index: Integer;
  value: Node | Nothing;
  comma: CommaNode | Nothing;
  statements: StatementNode[];
};

export function itemNode(
  analyzer: SyntaxAnalyzer,
  index: Integer,
  comma: CommaNode | Nothing,
  statements: StatementNode[],
): ItemNode {
  const children = comma ? [comma, ...statements] : [...statements];
  const reference = textResourceRange(analyzer.resource, rangeFromNodes(children));

  const node: ItemNode = {
    $: $.ItemNode,
    reference,
    children,
    index,
    value: statements.first()?.value,
    comma,
    statements,
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
