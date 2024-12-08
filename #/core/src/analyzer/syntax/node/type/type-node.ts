import {Nothing, nothing} from '#common';
import {
  $SyntaxNode,
  corePackageType,
  Node,
  OperatorNode,
  SyntaxAnalyzer,
  SyntaxNode,
  syntaxNode,
} from '#core';

export type TypeNode = SyntaxNode & {
  semantics: Nothing;
  operator: OperatorNode;
  value: Node;
};

export const $TypeNode = corePackageType<TypeNode>('TypeNode', $SyntaxNode);

export function typeNode(analyzer: SyntaxAnalyzer, operator: OperatorNode, value: Node): TypeNode {
  const node = syntaxNode(analyzer, {$: $TypeNode, operator, value, semantics: nothing});

  format(analyzer, node);

  return node;
}

function format(analyzer: SyntaxAnalyzer, node: TypeNode): void {
  analyzer.formatterManager.formatChildNode(node.value, true);
}
