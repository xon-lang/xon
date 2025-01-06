import {
  $SyntaxNode,
  corePackageType,
  Node,
  OperatorNode,
  SyntaxAnalyzer,
  SyntaxNode,
  syntaxNode,
} from '#analyzer';

export type PostfixNode = SyntaxNode & {
  value: Node;
  operator: OperatorNode;
};

export const $PostfixNode = corePackageType<PostfixNode>('PostfixNode', $SyntaxNode);

export function postfixNode(analyzer: SyntaxAnalyzer, value: Node, operator: OperatorNode): PostfixNode {
  const node = syntaxNode(analyzer, {$: $PostfixNode, value, operator, isExpression: true});

  format(analyzer, node);

  return node;
}

function format(analyzer: SyntaxAnalyzer, node: PostfixNode): void {
  const keepSingleWhitespace = node.operator.text.some((x) => x.isLetter());
  analyzer.formatterManager.formatChildNode(node.operator, keepSingleWhitespace);
}
