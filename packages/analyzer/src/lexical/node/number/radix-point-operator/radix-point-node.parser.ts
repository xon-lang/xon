import {$RadixPointNode, RADIX_POINT, RadixPointNode} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseRadixPointNode(source: CharStream): RadixPointNode | Nothing {
  return source.takeWhile($RadixPointNode, (x, i) => RADIX_POINT.at2(i).equals(x), RADIX_POINT.count());
}
