import {
  newFloatNode,
  newIntegerNode,
  NumberNode,
  parseIntegerContentNode,
  parseRadixPointNode,
} from '#analyzer';
import {CharStream, nothing, Nothing} from '#common';

export function parseNumberNode(source: CharStream): NumberNode | Nothing {
  const integerPartNode = parseIntegerContentNode(source);

  if (!integerPartNode) {
    return nothing;
  }

  const radixPointNode = parseRadixPointNode(source);

  if (!radixPointNode) {
    return newIntegerNode(integerPartNode);
  }

  const fractionalPartNode = parseIntegerContentNode(source);

  return newFloatNode(integerPartNode, radixPointNode, fractionalPartNode);
}
