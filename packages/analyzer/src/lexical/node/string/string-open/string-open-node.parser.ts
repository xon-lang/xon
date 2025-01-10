import {$StringOpenNode, STRING_OPEN, StringOpenNode} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseStringOpenNode(source: CharStream): StringOpenNode | Nothing {
  return source.takeWhile($StringOpenNode, (x, i) => STRING_OPEN.at2(i).equals(x), STRING_OPEN.count());
}
