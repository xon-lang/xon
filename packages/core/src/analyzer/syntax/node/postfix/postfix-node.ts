import {$, ExpressionNode, OperatorNode, SyntaxAnalyzer, SyntaxNode, syntaxNode} from '#core';

export type PostfixNode = SyntaxNode<$.PostfixNode> &
  ExpressionNode & {
    value: ExpressionNode;
    operator: OperatorNode;
  };

export function postfixNode(
  analyzer: SyntaxAnalyzer,
  value: ExpressionNode,
  operator: OperatorNode,
): PostfixNode {
  const node = syntaxNode(analyzer, {$: $.PostfixNode, value, operator});

  format(analyzer, node);

  return node;
}

function format(analyzer: SyntaxAnalyzer, node: PostfixNode): void {
  const keepSingleWhitespace = node.operator.text.characters.some((x) => x.isLetter(0));
  analyzer.formatterManager.formatChildNode(node.operator, keepSingleWhitespace);
}
