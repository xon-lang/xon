import {ASSIGN, ExpressionNode, OperatorNode, SyntaxAnalyzer, SyntaxNode, syntaxNode, TYPE} from '#/core';
import {$} from '#/typing';

export type PrefixNode = SyntaxNode<$.PrefixNode> &
  ExpressionNode & {
    operator: OperatorNode;
    value: ExpressionNode;
  };

export function prefixNode(
  analyzer: SyntaxAnalyzer,
  operator: OperatorNode,
  value: ExpressionNode,
): PrefixNode {
  const node = syntaxNode(analyzer, {$: $.PrefixNode, operator, value});

  format(analyzer, node);

  return node;
}

function format(analyzer: SyntaxAnalyzer, node: PrefixNode): void {
  const keepSingleWhitespace = node.operator.text.some(
    (x) => x.isLetter() || x.equals(TYPE) || x.equals(ASSIGN),
  );
  analyzer.formatterManager.formatChildNode(node.value, keepSingleWhitespace);
}
