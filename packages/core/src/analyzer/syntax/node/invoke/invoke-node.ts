import {$, ExpressionNode, GroupNode, SyntaxAnalyzer, SyntaxNode, syntaxNode} from '#core';

export type InvokeNode = SyntaxNode<$.InvokeNode> &
  ExpressionNode & {
    instance: ExpressionNode;
    group: GroupNode;
  };

export function invokeNode(analyzer: SyntaxAnalyzer, instance: ExpressionNode, group: GroupNode): InvokeNode {
  const node = syntaxNode(analyzer, {$: $.InvokeNode, instance, group});

  format(analyzer, node);

  return node;
}

function format(analyzer: SyntaxAnalyzer, node: InvokeNode): void {
  analyzer.formatterManager.formatChildNode(node.group, false);
}
