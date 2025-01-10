import {$IdNode, IdNode, UNDERSCORE} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseIdNode(source: CharStream): IdNode | Nothing {
  return source.takeWhile(
    $IdNode,
    (x, i) => (i === 0 && x.isLetter()) || (i > 0 && x.isLetterOrDigit()) || UNDERSCORE.equals(x),
  );
}
