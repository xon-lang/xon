import {$BracketCloseNode, BRACKET_CLOSE, BracketCloseNode} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseBracketCloseNode(source: CharStream): BracketCloseNode | Nothing {
  return source.takeWhile($BracketCloseNode, (x, i) => BRACKET_CLOSE.at2(i).equals(x), BRACKET_CLOSE.count());
}
