import {$StringCloseNode, STRING_CLOSE, StringCloseNode} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseStringCloseNode(source: CharStream): StringCloseNode | Nothing {
  return source.takeWhile($StringCloseNode, (x, i) => STRING_CLOSE.at2(i).equals(x), STRING_CLOSE.count());
}
