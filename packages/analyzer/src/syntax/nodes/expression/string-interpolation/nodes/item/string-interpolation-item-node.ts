import {$AnalyzerType, $SyntaxNode, ExpressionNode, LexicalNode, newSyntaxNode, SyntaxNode} from '#analyzer';
import {Brand, Nothing} from '#core';

export type StringInterpolationItemNode = SyntaxNode &
  Brand<'Analyzer.StringInterpolationItemNode'> & {
    content?: LexicalNode | Nothing;
    open?: LexicalNode | Nothing;
    expression?: ExpressionNode | Nothing;
    close?: LexicalNode | Nothing;
  };

export const $StringInterpolationItemNode = () =>
  $AnalyzerType<StringInterpolationItemNode>('StringInterpolationItemNode', $SyntaxNode());

export function newStringInterpolationItemNode(
  content: LexicalNode | Nothing,
  open: LexicalNode | Nothing,
  expression: ExpressionNode | Nothing,
  close: LexicalNode | Nothing,
): StringInterpolationItemNode {
  return newSyntaxNode({
    $: $StringInterpolationItemNode(),
    content,
    open,
    expression,
    close,
  });
}

// function format(analyzer: SyntaxAnalyzer, node: ItemNode): void {
//   if (node.comma) {
//     analyzer.formatterManager.formatChildNode(node.comma, false);
//   }
// }
