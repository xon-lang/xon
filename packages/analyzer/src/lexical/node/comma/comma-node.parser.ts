import {$CommaNode, COMMA, CommaNode} from '#analyzer';
import {CharStream, Nothing, nothing, textRange} from '#common';

export function parseCommaNode(source: CharStream): CommaNode | Nothing {
  const startPosition = source.position;
  const text = source.takeWhile((x, i) => COMMA.at2(i).equals(x), COMMA.count());

  if (!text) {
    return nothing;
  }

  const range = textRange(startPosition, source.position);

  return {$: $CommaNode, text, range};
}
