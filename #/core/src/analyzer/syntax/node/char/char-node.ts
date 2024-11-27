import {Char, Nothing} from '#/common';
import {
  CharCloseNode,
  CharContentNode,
  CharOpenNode,
  CharTypeSemantic,
  CharValueSemantic,
  ExpressionNode,
  SyntaxAnalyzer,
  SyntaxNode,
  syntaxNode,
} from '#/core';
import {$} from '#/typing';

export type CharNode = SyntaxNode<$.CharNode> &
  ExpressionNode & {
    semantic?: CharTypeSemantic | CharValueSemantic | Nothing;
    value: Char;

    open: CharOpenNode;
    content?: CharContentNode | Nothing;
    close?: CharCloseNode | Nothing;
  };

export function charNode(
  analyzer: SyntaxAnalyzer,
  open: CharOpenNode,
  content: CharContentNode | Nothing,
  close?: CharCloseNode | Nothing,
): CharNode {
  const value = content?.text.toString() ?? '';

  return syntaxNode(analyzer, {$: $.CharNode, open, content, close, value});
}
