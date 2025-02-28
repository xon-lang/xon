import {
  $AnalyzerType,
  $SyntaxNode,
  CharacterCloseNode,
  CharacterContentNode,
  CharacterOpenNode,
  diagnoseCharacterNode,
  formatCharacterNode,
  newSyntaxNode,
  SyntaxNode,
} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type CharacterNode = SyntaxNode &
  Brand<'Analyzer.CharacterNode'> & {
    openNode: CharacterOpenNode;
    contentNode?: CharacterContentNode | Nothing;
    closeNode?: CharacterCloseNode | Nothing;
  };

export const $CharacterNode = () => $AnalyzerType<CharacterNode>('CharacterNode', $SyntaxNode());

export function newCharacterNode(
  openNode: CharacterOpenNode,
  contentNode?: CharacterContentNode | Nothing,
  closeNode?: CharacterCloseNode | Nothing,
): CharacterNode {
  return newSyntaxNode({
    $: $CharacterNode(),
    canBeExpression: true,
    openNode,
    contentNode,
    closeNode,

    diagnose: diagnoseCharacterNode,
    format: formatCharacterNode,
  });
}
