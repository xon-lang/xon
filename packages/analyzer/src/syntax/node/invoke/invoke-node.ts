import {
  $SyntaxNode,
  analyzerPackageType,
  GroupNode,
  Node,
  SyntaxAnalyzer,
  SyntaxNode,
  syntaxNode,
} from '#analyzer';

export type InvokeNode = SyntaxNode & {
  instance: Node;
  group: GroupNode;
};

export const $InvokeNode = analyzerPackageType<InvokeNode>('InvokeNode', $SyntaxNode);

export function invokeNode(analyzer: SyntaxAnalyzer, instance: Node, group: GroupNode): InvokeNode {
  const node = syntaxNode(analyzer, {$: $InvokeNode, instance, group, isExpression: true});

  format(analyzer, node);

  return node;
}

function format(analyzer: SyntaxAnalyzer, node: InvokeNode): void {
  analyzer.formatterManager.formatChildNode(node.group, false);
}
