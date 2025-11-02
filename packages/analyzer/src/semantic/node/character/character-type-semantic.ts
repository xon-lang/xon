import {$AnalyzerType, $Semantic, DeclarationSemantic, Semantic} from '#analyzer';
import {Character, Nothing} from '#core';
import {Brand} from '#typing';

export type CharacterSemantic = Semantic &
  Brand<'Analyzer.CharacterTypeSemantic'> & {
    value: Character;
    declaration?: DeclarationSemantic | Nothing;
  };

export const $CharacterSemantic = () =>
  $AnalyzerType<CharacterSemantic>('CharacterTypeSemantic', $Semantic());

export function newCharacterSemantic(
  value: Character,
  declaration?: DeclarationSemantic | Nothing,
): CharacterSemantic {
  return {
    $: $CharacterSemantic(),
    declaration,
    value,
  };
}
