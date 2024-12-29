import {Char, newChar, Nothing, nothing} from '#common';
import {
  $SyntaxNode,
  CharCloseNode,
  CharContentNode,
  CharOpenNode,
  corePackageType,
  SyntaxAnalyzer,
  SyntaxNode,
  syntaxNode,
} from '#core';

export type CharNode = SyntaxNode & {
  value: Char;

  open: CharOpenNode;
  content?: CharContentNode | Nothing;
  close?: CharCloseNode | Nothing;
};

export const $CharNode = corePackageType<CharNode>('CharNode', $SyntaxNode);

export function charNode(
  analyzer: SyntaxAnalyzer,
  open: CharOpenNode,
  content: CharContentNode | Nothing,
  close?: CharCloseNode | Nothing,
): CharNode {
  const value = newChar(content?.text.toString() ?? '');

  return syntaxNode(analyzer, {
    $: $CharNode,
    open,
    content,
    close,
    value,
    semantics: nothing,
    isExpression: true,
  });
}
