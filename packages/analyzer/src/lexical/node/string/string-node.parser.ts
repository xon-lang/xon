import {
  newStringNode,
  parseStringCloseNode,
  parseStringContentNode,
  parseStringOpenNode,
  StringNode,
} from '#analyzer';
import {CharStream, nothing, Nothing} from '#common';

export function parseStringNode(source: CharStream): StringNode | Nothing {
  const openNode = parseStringOpenNode(source);

  if (!openNode) {
    return nothing;
  }

  const contentNode = parseStringContentNode(source);
  const closeNode = parseStringCloseNode(source);

  return newStringNode(openNode, contentNode, closeNode);
}
