import {CharNode, newCharNode, parseCharCloseNode, parseCharContentNode, parseCharOpenNode} from '#analyzer';
import {CharStream, nothing, Nothing} from '#common';

export function parseCharNode(source: CharStream): CharNode | Nothing {
  const openNode = parseCharOpenNode(source);

  if (!openNode) {
    return nothing;
  }

  const contentNode = parseCharContentNode(source);
  const closeNode = parseCharCloseNode(source);

  return newCharNode(openNode, contentNode, closeNode);
}
