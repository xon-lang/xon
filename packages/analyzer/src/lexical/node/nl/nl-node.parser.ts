import {$NlNode, CR, LF, NlNode, SPACE} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseNlNode(source: CharStream): NlNode | Nothing {
  const node = source.takeWhile(
    $NlNode,
    (x, i) => (i > 0 && x.equals(SPACE)) || x.equals(CR) || x.equals(LF),
  );

  if (node) {
    node.isHidden = true;
  }

  return node;
}
