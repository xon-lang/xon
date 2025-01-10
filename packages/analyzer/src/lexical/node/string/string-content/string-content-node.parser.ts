import {$StringContentNode, STRING_CLOSE, StringContentNode} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseStringContentNode(source: CharStream): StringContentNode | Nothing {
  return source.takeWhile($StringContentNode, (_x, i, z) => !z.startsWith(STRING_CLOSE, i));
}
