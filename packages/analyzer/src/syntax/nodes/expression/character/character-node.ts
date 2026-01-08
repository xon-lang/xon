import {
  $AnalyzerType,
  $ExpressionNode,
  ExpressionNode,
  formatCharacterNode,
  HighlightContext,
  LexicalNode,
  newSyntaxNode,
  nodesRange,
  semantifyCharacterNode,
} from '#analyzer';
import {Brand, Nothing} from '#core';

export type CharacterNode = ExpressionNode &
  Brand<'Analyzer.CharacterNode'> & {
    open: LexicalNode;
    content?: LexicalNode | Nothing;
    close?: LexicalNode | Nothing;
  };

export const $CharacterNode = () => $AnalyzerType<CharacterNode>('CharacterNode', $ExpressionNode());

export function newCharacterNode(
  open: LexicalNode,
  content?: LexicalNode | Nothing,
  close?: LexicalNode | Nothing,
): CharacterNode {
  return newSyntaxNode({
    $: $CharacterNode(),
    range: nodesRange(open, content, close),
    open,
    content,
    close,

    semantify: semantifyCharacterNode,
    format: formatCharacterNode,
    highlight(context: HighlightContext): void {},
  });
}
