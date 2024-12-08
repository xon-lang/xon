import {
  $SyntaxNode,
  corePackageType,
  Node,
  OperatorNode,
  RANGE,
  SyntaxAnalyzer,
  SyntaxNode,
  syntaxNode,
} from '#core';

export type InfixNode = SyntaxNode & {
  left: Node;
  operator: OperatorNode;
  right: Node;
};

export const $InfixNode = corePackageType<InfixNode>('InfixNode', $SyntaxNode);

export function infixNode(
  analyzer: SyntaxAnalyzer,
  left: Node,
  operator: OperatorNode,
  right: Node,
): InfixNode {
  const node = syntaxNode(analyzer, {$: $InfixNode, left, operator, right, isExpression: true});

  format(analyzer, node);

  return node;
}

function format(analyzer: SyntaxAnalyzer, node: InfixNode): void {
  const keepSingleWhitespace = !node.operator.text.equals(RANGE);
  analyzer.formatterManager.formatChildNode(node.operator, keepSingleWhitespace);
  analyzer.formatterManager.formatChildNode(node.right, keepSingleWhitespace);
}
