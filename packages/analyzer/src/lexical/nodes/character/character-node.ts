import {
  $SyntaxNode2,
  AnalyzerContext,
  analyzerPackageType,
  CharacterCloseNode,
  CharacterContentNode,
  CharacterOpenNode,
  diagnoseCharacterNode,
  formatCharacterNode,
  newSyntaxNode,
  SyntaxNode2,
} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type CharacterNode = SyntaxNode2 &
  Brand<'Analyzer.CharacterNode'> & {
    openNode: CharacterOpenNode;
    contentNode?: CharacterContentNode | Nothing;
    closeNode?: CharacterCloseNode | Nothing;
  };

export const $CharacterNode = analyzerPackageType<CharacterNode>('CharacterNode', $SyntaxNode2);

export function newCharacterNode(
  context: AnalyzerContext,
  openNode: CharacterOpenNode,
  contentNode?: CharacterContentNode | Nothing,
  closeNode?: CharacterCloseNode | Nothing,
): CharacterNode {
  return newSyntaxNode({
    $: $CharacterNode,
    openNode,
    contentNode,
    closeNode,

    diagnose: diagnoseCharacterNode,
    format: formatCharacterNode,
  });
}
