import {Nothing, nothing} from '#common';
import {ExpressionNode, OperatorNode, SyntaxAnalyzer, SyntaxNode, syntaxNode} from '#core';
import {$} from '#typing';

export type AssignNode = SyntaxNode<$.AssignNode> & {
  semantic: Nothing;
  operator: OperatorNode;
  value: ExpressionNode;
};

export function assignNode(
  analyzer: SyntaxAnalyzer,
  operator: OperatorNode,
  value: ExpressionNode,
): AssignNode {
  const node = syntaxNode(analyzer, {$: $.AssignNode, operator, value, semantic: nothing});

  format(analyzer, node);

  return node;
}

function format(analyzer: SyntaxAnalyzer, node: AssignNode): void {
  analyzer.formatterManager.formatChildNode(node.value, true);
}
