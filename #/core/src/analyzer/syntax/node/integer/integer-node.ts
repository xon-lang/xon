import {Number2} from '#common';
import {
  $SyntaxNode,
  corePackageType,
  IntegerContentNode,
  SyntaxAnalyzer,
  SyntaxNode,
  syntaxNode,
} from '#core';

// todo add also base node as 'LiteralNode' ???
export type IntegerNode = SyntaxNode & {
  content: IntegerContentNode;
  value: Number2;
};

export const $IntegerNode = corePackageType<IntegerNode>('IntegerNode', $SyntaxNode);

export function integerNode(analyzer: SyntaxAnalyzer, content: IntegerContentNode): IntegerNode {
  const value = Number(content.text.toString().replaceAll('_', ''));

  return syntaxNode(analyzer, {$: $IntegerNode, content, value, isExpression: true});
}
