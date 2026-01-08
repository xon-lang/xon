import {
  $AnalyzerType,
  $ExpressionNode,
  ExpressionNode,
  formatStringNode,
  HighlightContext,
  LexicalNode,
  newSyntaxNode,
  nodesRange,
  semantifyStringNode,
  StringInterpolationItemNode,
} from '#analyzer';
import {ArrayData, Brand, Nothing} from '#core';

export type StringInterpolationNode = ExpressionNode &
  Brand<'Analyzer.StringInterpolationNode'> & {
    open: LexicalNode;
    items: ArrayData<StringInterpolationItemNode>;
    close?: LexicalNode | Nothing;
  };

export const $StringInterpolationNode = () =>
  $AnalyzerType<StringInterpolationNode>('StringInterpolationNode', $ExpressionNode());

export function newStringInterpolationNode(
  open: LexicalNode,
  items: ArrayData<StringInterpolationItemNode>,
  close?: LexicalNode | Nothing,
): StringInterpolationNode {
  return newSyntaxNode({
    $: $StringInterpolationNode(),
    range: nodesRange(open, ...items, close),
    open,
    items,
    close,

    semantify: semantifyStringNode,
    format: formatStringNode,
  });
}
