import {
  $SyntaxNode,
  analyzerPackageType,
  IdNode,
  PrefixNode,
  SyntaxAnalyzer,
  SyntaxNode,
  syntaxNode,
} from '#analyzer';

export type AssignmentNode = SyntaxNode & {
  id: IdNode;
  assign: PrefixNode;
};

export const $AssignmentNode = analyzerPackageType<AssignmentNode>('AssignmentNode', $SyntaxNode);

export function assignmentNode(analyzer: SyntaxAnalyzer, id: IdNode, assign: PrefixNode): AssignmentNode {
  const node = syntaxNode(analyzer, {$: $AssignmentNode, id, assign});

  format(analyzer, node);

  return node;
}

function format(analyzer: SyntaxAnalyzer, node: AssignmentNode): void {
  analyzer.formatterManager.formatChildNode(node.assign, true);
}
