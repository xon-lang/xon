import {Number2} from '#common';
import {ExpressionNode, IntegerContentNode, SyntaxAnalyzer, SyntaxNode, syntaxNode} from '#core';
import {$} from '#typing';

// todo add also base node as 'LiteralNode' ???
export type IntegerNode = SyntaxNode<$.IntegerNode> &
  ExpressionNode & {
    content: IntegerContentNode;
    value: Number2;
  };

export function integerNode(analyzer: SyntaxAnalyzer, content: IntegerContentNode): IntegerNode {
  const value = Number(content.text.toString().replaceAll('_', ''));

  return syntaxNode(analyzer, {$: $.IntegerNode, content, value});
}
