import {$StringContentNode, STRING_CLOSE, StringContentNode} from '#analyzer';
import {CharStream, Nothing, nothing, textRange} from '#common';

export function parseStringContentNode(source: CharStream): StringContentNode | Nothing {
  const startPosition = source.position;
  const text = source.takeWhile((_x, i, z) => !z.startsWith(STRING_CLOSE, i));

  if (!text) {
    return nothing;
  }

  const range = textRange(startPosition, source.position);

  return {$: $StringContentNode, text, range};
}
