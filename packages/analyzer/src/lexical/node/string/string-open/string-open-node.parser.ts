import {$StringOpenNode, STRING_OPEN, StringOpenNode} from '#analyzer';
import {CharStream, Nothing, nothing, textRange} from '#common';

export function parseStringOpenNode(source: CharStream): StringOpenNode | Nothing {
  const startPosition = source.position;
  const text = source.takeWhile((x, i) => STRING_OPEN.at2(i).equals(x), STRING_OPEN.count());

  if (!text) {
    return nothing;
  }

  const range = textRange(startPosition, source.position);

  return {$: $StringOpenNode, text, range};
}
