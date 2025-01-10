import {$CharOpenNode, CHAR_OPEN, CharOpenNode} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseCharOpenNode(source: CharStream): CharOpenNode | Nothing {
  return source.takeWhile($CharOpenNode, (x) => CHAR_OPEN.equals(x), CHAR_OPEN.count());
}
