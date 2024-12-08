import {
  $SyntaxNode,
  corePackageType,
  IdNode,
  PrefixNode,
  SyntaxAnalyzer,
  SyntaxNode,
  syntaxNode,
} from '#core';

export type AssignmentNode = SyntaxNode & {
  id: IdNode;
  assign: PrefixNode;
};

export const $AssignmentNode = corePackageType<AssignmentNode>('AssignmentNode', $SyntaxNode);

export function assignmentNode(analyzer: SyntaxAnalyzer, id: IdNode, assign: PrefixNode): AssignmentNode {
  const node = syntaxNode(analyzer, {$: $AssignmentNode, id, assign});

  format(analyzer, node);

  return node;
}

function format(analyzer: SyntaxAnalyzer, node: AssignmentNode): void {
  analyzer.formatterManager.formatChildNode(node.assign, true);
}
