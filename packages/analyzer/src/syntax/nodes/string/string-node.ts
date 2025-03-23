import {
  $AnalyzerType,
  $SyntaxNode,
  diagnoseStringNode,
  formatStringNode,
  HighlightContext,
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

    semantify: semantifyStringNode,
    diagnose: diagnoseStringNode,
    format: formatStringNode,
    highlight(context: HighlightContext): void {},
  });
}
