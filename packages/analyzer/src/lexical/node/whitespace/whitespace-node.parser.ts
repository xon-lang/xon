import {$WhitespaceNode, SPACE, WhitespaceNode} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseWhitespaceNode(source: CharStream): WhitespaceNode | Nothing {
  const node = source.takeWhile($WhitespaceNode, (x) => x.equals(SPACE));

  if (node) {
    node.isHidden = true;
  }

  return node;
}
