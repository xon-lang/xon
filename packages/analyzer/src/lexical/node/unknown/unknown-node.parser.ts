import {$UnknownNode, UnknownNode} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseUnknownNode(source: CharStream): UnknownNode | Nothing {
  return source.takeWhile($UnknownNode, () => true, 1);
}
