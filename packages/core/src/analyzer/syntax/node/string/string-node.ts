import {Nothing, nothing, String2} from '#common';
import {
  $SyntaxNode,
  corePackageType,
  StringCloseNode,
  StringContentNode,
  StringOpenNode,
  SyntaxAnalyzer,
  SyntaxNode,
  syntaxNode,
} from '#core';

export type StringNode = SyntaxNode & {
  value: String2;

  open: StringOpenNode;
  content?: StringContentNode | Nothing;
  close?: StringCloseNode | Nothing;
};

export const $StringNode = corePackageType<StringNode>('StringNode', $SyntaxNode);

export function stringNode(
  analyzer: SyntaxAnalyzer,
  open: StringOpenNode,
  content: StringContentNode | Nothing,
  close?: StringCloseNode | Nothing,
): StringNode {
  const value = content?.text.toNativeString() ?? '';

  return syntaxNode(analyzer, {
    $: $StringNode,
    open,
    content,
    close,
    value,
    semantics: nothing,
    isExpression: true,
  });
}
