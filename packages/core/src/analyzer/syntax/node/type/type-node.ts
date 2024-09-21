import {Nothing, nothing} from '#common';
import {ExpressionNode, OperatorNode, SyntaxAnalyzer, SyntaxNode, syntaxNode} from '#core';
import {$} from '#typing';

export type TypeNode = SyntaxNode<$.TypeNode> & {
  semantic: Nothing;
  operator: OperatorNode;
  value: ExpressionNode;
};

export function typeNode(analyzer: SyntaxAnalyzer, operator: OperatorNode, value: ExpressionNode): TypeNode {
  const node = syntaxNode(analyzer, {$: $.TypeNode, operator, value, semantic: nothing});

  format(analyzer, node);

  return node;
}

function format(analyzer: SyntaxAnalyzer, node: TypeNode): void {
  analyzer.formatterManager.formatChildNode(node.value, true);
}
