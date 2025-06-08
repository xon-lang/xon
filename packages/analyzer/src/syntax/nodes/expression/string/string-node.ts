import {
  $AnalyzerType,
  $ExpressionNode,
  ExpressionNode,
  formatStringNode,
  HighlightContext,
  newSyntaxNode,
  semantifyStringNode,
  StringCloseNode,
  StringContentNode,
  StringOpenNode,
} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type StringNode = ExpressionNode &
  Brand<'Analyzer.StringNode'> & {
    open: StringOpenNode;
    content?: StringContentNode | Nothing;
    close?: StringCloseNode | Nothing;
  };

export const $StringNode = () => $AnalyzerType<StringNode>('StringNode', $ExpressionNode());

export function newStringNode(
  open: StringOpenNode,
  content?: StringContentNode | Nothing,
  close?: StringCloseNode | Nothing,
): StringNode {
  return newSyntaxNode({
    $: $StringNode(),
    open,
    content,
    close,

    semantify: semantifyStringNode,
    format: formatStringNode,
    highlight(context: HighlightContext): void {},
  });
}
