import {$CommaNode, COMMA, CommaNode} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseCommaNode(source: CharStream): CommaNode | Nothing {
  return source.takeWhile($CommaNode, (x, i) => COMMA.at2(i).equals(x), COMMA.count());
}
