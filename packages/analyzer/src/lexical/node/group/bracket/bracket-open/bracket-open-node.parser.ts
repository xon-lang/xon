import {$BracketOpenNode, BRACKET_OPEN, BracketOpenNode} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseBracketOpenNode(source: CharStream): BracketOpenNode | Nothing {
  return source.takeWhile($BracketOpenNode, (x, i) => BRACKET_OPEN.at2(i).equals(x), BRACKET_OPEN.count());
}
