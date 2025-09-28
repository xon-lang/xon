import {
  $AnalyzerType,
  $ExpressionNode,
  ExpressionNode,
  formatStringNode,
  HighlightContext,
  newSyntaxNode,
  semantifyStringNode,
  StringCloseNode,
  StringInterpolationItemNode,
  StringInterpolationOpenNode,
} from '#analyzer';
import {ArrayData, Nothing} from '#common';
import {Brand} from '#typing';

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
    open,
    items,
    close,

    semantify: semantifyStringNode,
    format: formatStringNode,
    highlight(context: HighlightContext): void {},
  });
}
