import {Nothing, String2} from '#/common';
import {
  ExpressionNode,
  StringCloseNode,
  StringContentNode,
  StringOpenNode,
  StringTypeSemantic,
  StringValueSemantic,
  SyntaxAnalyzer,
  SyntaxNode,
  syntaxNode,
} from '#/core';
import {$} from '#/typing';

export type StringNode = SyntaxNode<$.StringNode> &
  ExpressionNode & {
    semantic?: StringTypeSemantic | StringValueSemantic | Nothing;
    value: String2;

    open: StringOpenNode;
    content?: StringContentNode | Nothing;
    close?: StringCloseNode | Nothing;
  };

export function stringNode(
  analyzer: SyntaxAnalyzer,
  open: StringOpenNode,
  content: StringContentNode | Nothing,
  close?: StringCloseNode | Nothing,
): StringNode {
  const value = content?.text.toString() ?? '';

  return syntaxNode(analyzer, {$: $.StringNode, open, content, close, value});
}
