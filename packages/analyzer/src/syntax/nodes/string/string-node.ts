import {
  $AnalyzerType,
  $SyntaxNode,
  diagnoseStringNode,
  formatStringNode,
  newSyntaxNode,
  semantifyStringNode,
  StringCloseNode,
  StringContentNode,
  StringOpenNode,
  SyntaxNode,
} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type StringNode = SyntaxNode &
  Brand<'Analyzer.StringNode'> & {
    open: StringOpenNode;
    content?: StringContentNode | Nothing;
    close?: StringCloseNode | Nothing;
  };

export const $StringNode = () => $AnalyzerType<StringNode>('StringNode', $SyntaxNode());

export function newStringNode(
  open: StringOpenNode,
  content?: StringContentNode | Nothing,
  close?: StringCloseNode | Nothing,
): StringNode {
  return newSyntaxNode({
    $: $StringNode(),
    canBeExpression: true,
    open,
    content,
    close,

    diagnose: diagnoseStringNode,
    format: formatStringNode,
    semantify: semantifyStringNode,
  });
}
