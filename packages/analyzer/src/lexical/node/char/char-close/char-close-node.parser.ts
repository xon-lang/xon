import {$CharCloseNode, CHAR_CLOSE, CharCloseNode} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseCharCloseNode(source: CharStream): CharCloseNode | Nothing {
  return source.takeWhile($CharCloseNode, (x, i) => CHAR_CLOSE.at2(i).equals(x), CHAR_CLOSE.count());
}
