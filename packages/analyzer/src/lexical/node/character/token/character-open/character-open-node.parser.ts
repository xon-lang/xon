import {$CharacterOpenNode, AnalyzerContext, CHAR_OPEN, CharacterOpenNode} from '#analyzer';
import {Nothing} from '#common';

export function parseCharacterOpenNode(context: AnalyzerContext): CharacterOpenNode | Nothing {
  return context.source.takeWhile($CharacterOpenNode, (x) => CHAR_OPEN.equals(x), CHAR_OPEN.count());
}
