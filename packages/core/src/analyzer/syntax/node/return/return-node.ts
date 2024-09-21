import {Nothing, nothing} from '#common';
import {ExpressionNode, OperatorNode, SyntaxAnalyzer, SyntaxNode, syntaxNode} from '#core';
import {$} from '#typing';

export type ReturnNode = SyntaxNode<$.ReturnNode> & {
  semantic: Nothing;
  operator: OperatorNode;
  value?: ExpressionNode | Nothing;
};

export function returnNode(
  analyzer: SyntaxAnalyzer,
  operator: OperatorNode,
  value: ExpressionNode | Nothing,
): ReturnNode {
  const node = syntaxNode(analyzer, {$: $.ReturnNode, operator, value, semantic: nothing});

  format(analyzer, node);

  return node;
}

function format(analyzer: SyntaxAnalyzer, node: ReturnNode): void {
  if (node.value) {
    analyzer.formatterManager.formatChildNode(node.value, true);
  }
}
