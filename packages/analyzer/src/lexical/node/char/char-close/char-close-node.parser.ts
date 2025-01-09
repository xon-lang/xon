import {$CharCloseNode, CHAR_CLOSE, CharCloseNode} from '#analyzer';
import {CharStream, Nothing, nothing, textRange} from '#common';

export function parseCharCloseNode(source: CharStream): CharCloseNode | Nothing {
  const startPosition = source.position;
  const text = source.takeWhile((x, i) => CHAR_CLOSE.at2(i).equals(x), CHAR_CLOSE.count());

  if (!text) {
    return nothing;
  }

  const range = textRange(startPosition, source.position);

  return {$: $CharCloseNode, text, range};
}
