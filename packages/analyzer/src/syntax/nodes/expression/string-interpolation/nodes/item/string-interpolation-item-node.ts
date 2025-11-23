import {
  $AnalyzerType,
  $SyntaxNode,
  BraceCloseNode,
  BraceOpenNode,
  FormatterContext,
  HighlightContext,
  newSyntaxNode,
  Node,
  SemanticContext,
  StringInterpolationContentNode,
  SyntaxNode,
} from '#analyzer';
import {ArrayData, Brand, Nothing} from '#core';

export type StringInterpolationItemNode = SyntaxNode &
  Brand<'Analyzer.StringInterpolationItemNode'> & {
    content?: StringInterpolationContentNode | Nothing;
    open?: BraceOpenNode | Nothing;
    nodes: ArrayData<Node>;
    close?: BraceCloseNode | Nothing;
  };

export const $StringInterpolationItemNode = () =>
  $AnalyzerType<StringInterpolationItemNode>('StringInterpolationItemNode', $SyntaxNode());

export function newStringInterpolationItemNode(
  content: StringInterpolationContentNode | Nothing,
  open: BraceOpenNode | Nothing,
  nodes: ArrayData<Node>,
  close: BraceCloseNode | Nothing,
): StringInterpolationItemNode {
  return newSyntaxNode({
    $: $StringInterpolationItemNode(),
    content,
    open,
    nodes,
    close,

    semantify(context: SemanticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}

// function format(analyzer: SyntaxAnalyzer, node: ItemNode): void {
//   if (node.comma) {
//     analyzer.formatterManager.formatChildNode(node.comma, false);
//   }
// }
