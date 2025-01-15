import {$ParenCloseNode, PAREN_CLOSE, ParenCloseNode} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseParenCloseNode(source: CharStream): ParenCloseNode | Nothing {
  return source.takeWhile($ParenCloseNode, (x, i) => PAREN_CLOSE.at2(i).equals(x), PAREN_CLOSE.count());
}
