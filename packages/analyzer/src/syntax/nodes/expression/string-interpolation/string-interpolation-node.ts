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
  StringInterpolationItemNode,
  StringInterpolationOpenNode,
} from '#analyzer';
import {ArrayData, Brand, Nothing} from '#core';

export type StringInterpolationNode = ExpressionNode &
  Brand<'Analyzer.StringInterpolationNode'> & {
    open: StringInterpolationOpenNode;
    items: ArrayData<StringInterpolationItemNode>;
    close?: StringCloseNode | Nothing;
  };

export const $StringInterpolationNode = () =>
  $AnalyzerType<StringInterpolationNode>('StringInterpolationNode', $ExpressionNode());

export function newStringInterpolationNode(
  open: StringInterpolationOpenNode,
  items: ArrayData<StringInterpolationItemNode>,
  close?: StringCloseNode | Nothing,
): StringInterpolationNode {
  return newSyntaxNode({
    $: $StringInterpolationNode(),
    range: nodesRange(open, ...items, close),
    open,
    items,
    close,

    semantify: semantifyStringNode,
    format: formatStringNode,
    highlight(context: HighlightContext): void {},
  });
}
