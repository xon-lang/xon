import {$CharContentNode, CHAR_CLOSE, CharContentNode} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseCharContentNode(source: CharStream): CharContentNode | Nothing {
  return source.takeWhile($CharContentNode, (_x, i, z) => !z.startsWith(CHAR_CLOSE, i));
}
