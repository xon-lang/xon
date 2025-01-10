import {$WhitespaceNode, SPACE, WhitespaceNode} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseWhitespaceNode(source: CharStream): WhitespaceNode | Nothing {
  return source.takeWhile($WhitespaceNode, (x) => x.equals(SPACE));
}
