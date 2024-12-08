import {$SyntaxNode, corePackageType, GroupNode, Node, SyntaxAnalyzer, SyntaxNode, syntaxNode} from '#core';

export type InvokeNode = SyntaxNode & {
  instance: Node;
  group: GroupNode;
};

export const $InvokeNode = corePackageType<InvokeNode>('InvokeNode', $SyntaxNode);

export function invokeNode(analyzer: SyntaxAnalyzer, instance: Node, group: GroupNode): InvokeNode {
  const node = syntaxNode(analyzer, {$: $InvokeNode, instance, group, isExpression: true});

  format(analyzer, node);

  return node;
}

function format(analyzer: SyntaxAnalyzer, node: InvokeNode): void {
  analyzer.formatterManager.formatChildNode(node.group, false);
}
