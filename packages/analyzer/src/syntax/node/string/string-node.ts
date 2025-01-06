import {
  $SyntaxNode,
  analyzerPackageType,
  StringCloseNode,
  StringContentNode,
  StringOpenNode,
  SyntaxAnalyzer,
  SyntaxNode,
  syntaxNode,
} from '#analyzer';
import {newText, Nothing, nothing, Text} from '#common';

export type StringNode = SyntaxNode & {
  value: Text;

  open: StringOpenNode;
  content?: StringContentNode | Nothing;
  close?: StringCloseNode | Nothing;
};

export const $StringNode = analyzerPackageType<StringNode>('StringNode', $SyntaxNode);

export function stringNode(
  analyzer: SyntaxAnalyzer,
  open: StringOpenNode,
  content: StringContentNode | Nothing,
  close?: StringCloseNode | Nothing,
): StringNode {
  const value = content?.text ?? newText();

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
