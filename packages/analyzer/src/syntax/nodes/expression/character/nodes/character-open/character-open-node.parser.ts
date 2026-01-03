import {$CharacterOpenNode, AnalyzerContext, CHAR_OPEN, CharacterOpenNode} from '#analyzer';
import {Nothing} from '#core';

export function parseCharacterOpenNode(context: AnalyzerContext): CharacterOpenNode | Nothing {
  return context.source.takeCharacter($CharacterOpenNode(), CHAR_OPEN);
}
