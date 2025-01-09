import {$RadixPointNode, RADIX_POINT, RadixPointNode} from '#analyzer';
import {CharStream, Nothing, nothing, textRange} from '#common';

export function parseRadixPointNode(source: CharStream): RadixPointNode | Nothing {
  const startPosition = source.position;
  const text = source.takeWhile((x, i) => RADIX_POINT.at2(i).equals(x), RADIX_POINT.count());

  if (!text) {
    return nothing;
  }

  const range = textRange(startPosition, source.position);

  return {$: $RadixPointNode, text, range};
}
