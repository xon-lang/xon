import {$CharacterContentNode, AnalyzerContext, CHAR_CLOSE, CharacterContentNode} from '#analyzer';
import {Nothing} from '#core';

export function parseCharacterContentNode(context: AnalyzerContext): CharacterContentNode | Nothing {
  return context.source.takeWhile($CharacterContentNode(), (x) => !x.equals(CHAR_CLOSE));
}
