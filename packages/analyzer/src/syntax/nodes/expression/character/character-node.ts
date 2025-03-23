import {
  $AnalyzerType,
  $ExpressionNode,
  CharacterCloseNode,
  CharacterContentNode,
  CharacterOpenNode,
  diagnoseCharacterNode,
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
    canBeExpression: true,
    open,
    content,
    close,

    semantify: semantifyCharacterNode,
    diagnose: diagnoseCharacterNode,
    format: formatCharacterNode,
    highlight(context: HighlightContext): void {},
  });
}
