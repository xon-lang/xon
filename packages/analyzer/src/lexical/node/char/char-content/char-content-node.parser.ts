import {$CharContentNode, CHAR_CLOSE, CharContentNode} from '#analyzer';
import {CharStream, nothing, Nothing, textRange} from '#common';

export function parseCharContentNode(source: CharStream): CharContentNode | Nothing {
  const startPosition = source.position;
  const text = source.takeWhile((_x, i, z) => !z.startsWith(CHAR_CLOSE, i));

  if (!text) {
    return nothing;
  }

  const range = textRange(startPosition, source.position);

  return {$: $CharContentNode, text, range};
}
