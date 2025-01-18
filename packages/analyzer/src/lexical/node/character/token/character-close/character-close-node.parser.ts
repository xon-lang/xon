import {$CharacterCloseNode, AnalyzerContext, CHAR_CLOSE, CharacterCloseNode} from '#analyzer';
import {Nothing} from '#common';

export function parseCharacterCloseNode(context: AnalyzerContext): CharacterCloseNode | Nothing {
  return context.source.takeWhile(
    $CharacterCloseNode,
    (x, i) => CHAR_CLOSE.at2(i).equals(x),
    CHAR_CLOSE.count(),
  );
}
