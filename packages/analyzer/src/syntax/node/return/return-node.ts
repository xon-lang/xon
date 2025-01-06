import {
  $SyntaxNode,
  analyzerPackageType,
  Node,
  OperatorNode,
  SyntaxAnalyzer,
  SyntaxNode,
  syntaxNode,
} from '#analyzer';
import {Nothing, nothing} from '#common';

export type ReturnNode = SyntaxNode & {
  semantic: Nothing;
  operator: OperatorNode;
  value?: Node | Nothing;
};

export const $ReturnNode = analyzerPackageType<ReturnNode>('ReturnNode', $SyntaxNode);

export function returnNode(
  analyzer: SyntaxAnalyzer,
  operator: OperatorNode,
  value: Node | Nothing,
): ReturnNode {
  const node = syntaxNode(analyzer, {$: $ReturnNode, operator, value, semantic: nothing});

  format(analyzer, node);

  return node;
}

function format(analyzer: SyntaxAnalyzer, node: ReturnNode): void {
  if (node.value) {
    analyzer.formatterManager.formatChildNode(node.value, true);
  }
}
