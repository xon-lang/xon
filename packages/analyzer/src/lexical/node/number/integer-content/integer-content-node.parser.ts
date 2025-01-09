import {$IntegerContentNode, IntegerContentNode, UNDERSCORE} from '#analyzer';
import {CharStream, Nothing, nothing, textRange} from '#common';

export function parseIntegerContentNode(source: CharStream): IntegerContentNode | Nothing {
  const startPosition = source.position;
  const firstChar = source.takeWhile((x) => x.isDigit(), 1);

  if (!firstChar) {
    return nothing;
  }

  const text =
    source.takeWhile((x) => x.isDigit() || x.equals(UNDERSCORE))?.addFirstItems(firstChar) ?? firstChar;

  const range = textRange(startPosition, source.position);

  return {$: $IntegerContentNode, text, range};
}
