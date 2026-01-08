import {
  $AnalyzerType,
  $ExpressionNode,
  ExpressionNode,
  formatStringNode,
  HighlightContext,
  newSyntaxNode,
  nodesRange,
  semantifyStringNode,
  StringCloseNode,
  StringContentNode,
  StringOpenNode,
} from '#analyzer';
import {Brand, Nothing} from '#core';

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
    range: nodesRange(open, content, close),
    open,
    content,
    close,

    semantify: semantifyStringNode,
    format: formatStringNode,
    highlight(context: HighlightContext): void {},
  });
}
