import {nothing, Nothing} from '#common';
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
import {CharTypeSemantics, CharValueSemantics} from '#semantics';

export type CharNode = SyntaxNode & {
  semantic?: CharTypeSemantics | CharValueSemantics | Nothing;
  value: string;

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
  const value = content?.text.toString() ?? '';

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
