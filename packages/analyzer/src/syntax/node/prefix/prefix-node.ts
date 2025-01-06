import {
  $SyntaxNode,
  ASSIGN,
  corePackageType,
  Node,
  OperatorNode,
  SyntaxAnalyzer,
  SyntaxNode,
  syntaxNode,
  TYPE,
} from '#analyzer';

export type PrefixNode = SyntaxNode & {
  operator: OperatorNode;
  value: Node;
};

export const $PrefixNode = corePackageType<PrefixNode>('PrefixNode', $SyntaxNode);

export function prefixNode(analyzer: SyntaxAnalyzer, operator: OperatorNode, value: Node): PrefixNode {
  const node = syntaxNode(analyzer, {$: $PrefixNode, operator, value, isExpression: true});

  format(analyzer, node);

  return node;
}

function format(analyzer: SyntaxAnalyzer, node: PrefixNode): void {
  const keepSingleWhitespace = node.operator.text.some(
    (x) => x.isLetter() || TYPE.equals(x) || ASSIGN.equals(x),
  );
  analyzer.formatterManager.formatChildNode(node.value, keepSingleWhitespace);
}
