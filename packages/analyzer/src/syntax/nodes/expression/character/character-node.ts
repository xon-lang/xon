import {
  $AnalyzerType,
  $ExpressionNode,
  CharacterCloseNode,
  CharacterContentNode,
  CharacterOpenNode,
  ExpressionNode,
  formatCharacterNode,
  HighlightContext,
  newSyntaxNode,
  semantifyCharacterNode,
} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type CharacterNode = ExpressionNode &
  Brand<'Analyzer.CharacterNode'> & {
    open: CharacterOpenNode;
    content?: CharacterContentNode | Nothing;
    close?: CharacterCloseNode | Nothing;
  };

export const $CharacterNode = () => $AnalyzerType<CharacterNode>('CharacterNode', $ExpressionNode());

export function newCharacterNode(
  open: CharacterOpenNode,
  content?: CharacterContentNode | Nothing,
  close?: CharacterCloseNode | Nothing,
): CharacterNode {
  return newSyntaxNode({
    $: $CharacterNode(),
    open,
    content,
    close,

    semantify: semantifyCharacterNode,
    format: formatCharacterNode,
    highlight(context: HighlightContext): void {},
  });
}
