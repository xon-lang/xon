import {$CharOpenNode, CHAR_OPEN, CharOpenNode} from '#analyzer';
import {CharStream, Nothing, nothing, textRange} from '#common';

export function parseCharOpenNode(source: CharStream): CharOpenNode | Nothing {
  const startPosition = source.position;
  const text = source.takeWhile((x) => CHAR_OPEN.equals(x), CHAR_OPEN.count());

  if (!text) {
    return nothing;
  }

  const range = textRange(startPosition, source.position);

  return {$: $CharOpenNode, text, range};
}
