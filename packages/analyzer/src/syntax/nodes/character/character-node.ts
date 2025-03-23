import {
  $AnalyzerType,
  $SyntaxNode,
  CharacterCloseNode,
  CharacterContentNode,
  CharacterOpenNode,
  diagnoseCharacterNode,
  formatCharacterNode,
  HighlightContext,
  newSyntaxNode,
  semantifyCharacterNode,
  SyntaxNode,
} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type CharacterNode = SyntaxNode &
  Brand<'Analyzer.CharacterNode'> & {
    open: CharacterOpenNode;
    content?: CharacterContentNode | Nothing;
    close?: CharacterCloseNode | Nothing;
  };

export const $CharacterNode = () => $AnalyzerType<CharacterNode>('CharacterNode', $SyntaxNode());

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
