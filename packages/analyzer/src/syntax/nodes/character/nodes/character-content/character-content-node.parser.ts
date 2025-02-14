import {$CharacterContentNode, AnalyzerContext, CHAR_CLOSE, CharacterContentNode} from '#analyzer';
import {Nothing} from '#common';

export function parseCharacterContentNode(context: AnalyzerContext): CharacterContentNode | Nothing {
  return context.source.takeWhile($CharacterContentNode, (_x, i, z) => !z.startsWith(CHAR_CLOSE, i));
}
