import {$IntegerContentNode, IntegerContentNode, UNDERSCORE} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseIntegerContentNode(source: CharStream): IntegerContentNode | Nothing {
  return source.takeWhile($IntegerContentNode, (x, i) => (i > 0 && x.equals(UNDERSCORE)) || x.isDigit());
}
