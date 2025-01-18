import {$NlNode, CR, CRLF, LF, NlNode} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseNlNode(source: CharStream): NlNode | Nothing {
  const crlfNode = source.takeWhile($NlNode, (x, i) => CRLF.at2(i).equals(x), CRLF.count());
  const node = crlfNode ?? source.takeWhile($NlNode, (x, i) => x.equals(CR) || x.equals(LF), 1);

  if (node) {
    node.isHidden = true;
  }

  return node;
}
