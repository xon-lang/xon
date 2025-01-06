import {
  $SyntaxNode,
  analyzerPackageType,
  IntegerContentNode,
  SyntaxAnalyzer,
  SyntaxNode,
  syntaxNode,
} from '#analyzer';
import {Number2} from '#common';

// todo add also base node as 'LiteralNode' ???
export type IntegerNode = SyntaxNode & {
  content: IntegerContentNode;
  value: Number2;
};

export const $IntegerNode = analyzerPackageType<IntegerNode>('IntegerNode', $SyntaxNode);

export function integerNode(analyzer: SyntaxAnalyzer, content: IntegerContentNode): IntegerNode {
  const value = Number(content.text.toNativeString().replaceAll('_', ''));

  return syntaxNode(analyzer, {$: $IntegerNode, content, value, isExpression: true});
}
