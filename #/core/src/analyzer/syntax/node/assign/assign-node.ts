import {Nothing, nothing} from '#common';
import {
  $SyntaxNode,
  corePackageType,
  Node,
  OperatorNode,
  SyntaxAnalyzer,
  SyntaxNode,
  syntaxNode,
} from '#core';

export type AssignNode = SyntaxNode & {
  semantic: Nothing;
  operator: OperatorNode;
  value: Node;
};

export const $AssignNode = corePackageType<AssignNode>('AssignNode', $SyntaxNode);

export function assignNode(analyzer: SyntaxAnalyzer, operator: OperatorNode, value: Node): AssignNode {
  const node = syntaxNode(analyzer, {$: $AssignNode, operator, value, semantic: nothing});

  format(analyzer, node);

  return node;
}

function format(analyzer: SyntaxAnalyzer, node: AssignNode): void {
  analyzer.formatterManager.formatChildNode(node.value, true);
}
