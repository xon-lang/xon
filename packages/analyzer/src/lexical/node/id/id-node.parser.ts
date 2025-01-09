import {$IdNode, IdNode, UNDERSCORE} from '#analyzer';
import {CharStream, Nothing, nothing, textRange} from '#common';

export function parseIdNode(source: CharStream): IdNode | Nothing {
  const startPosition = source.position;
  const firstChar = source.takeWhile((x) => UNDERSCORE.equals(x) || x.isLetter(), 1);

  if (!firstChar) {
    return nothing;
  }

  const text =
    source.takeWhile((x) => UNDERSCORE.equals(x) || x.isLetterOrDigit())?.addFirstItems(firstChar) ??
    firstChar;

  const range = textRange(startPosition, source.position);

  return {$: $IdNode, text, range};
}
