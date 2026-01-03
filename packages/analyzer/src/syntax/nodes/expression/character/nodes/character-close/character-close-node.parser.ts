import {$CharacterCloseNode, AnalyzerContext, CHAR_CLOSE, CharacterCloseNode} from '#analyzer';
import {Nothing} from '#core';

export function parseCharacterCloseNode(context: AnalyzerContext): CharacterCloseNode | Nothing {
  return context.source.takeCharacter($CharacterCloseNode(), CHAR_CLOSE);
}
