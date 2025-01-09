import {$StringCloseNode, STRING_CLOSE, StringCloseNode} from '#analyzer';
import {CharStream, Nothing, nothing, textRange} from '#common';

export function parseStringCloseNode(source: CharStream): StringCloseNode | Nothing {
  const startPosition = source.position;
  const text = source.takeWhile((x, i) => STRING_CLOSE.at2(i).equals(x), STRING_CLOSE.count());

  if (!text) {
    return nothing;
  }

  const range = textRange(startPosition, source.position);

  return {$: $StringCloseNode, text, range};
}
