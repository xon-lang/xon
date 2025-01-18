import {
  AnalyzerContext,
  newFloatNode,
  newIntegerNode,
  NumberNode,
  parseIntegerContentNode,
  parseRadixPointNode,
} from '#analyzer';
import {nothing, Nothing} from '#common';

export function parseNumberNode(context: AnalyzerContext): NumberNode | Nothing {
  const integerPartNode = parseIntegerContentNode(context);

  if (!integerPartNode) {
    return nothing;
  }

  const radixPointNode = parseRadixPointNode(context);

  if (!radixPointNode) {
    return newIntegerNode(integerPartNode);
  }

  const fractionalPartNode = parseIntegerContentNode(context);

  return newFloatNode(integerPartNode, radixPointNode, fractionalPartNode);
}
