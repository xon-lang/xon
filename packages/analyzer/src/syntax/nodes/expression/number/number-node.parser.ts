import {AnalyzerContext, newFloatNode, newIntegerNode, NumberNode, POINT, UNDERSCORE} from '#analyzer';
import {nothing, Nothing} from '#core';

export function parseNumberNode(context: AnalyzerContext): NumberNode | Nothing {
  const integer = context.source.takeWhile((x, i) => x.isDigit() || (i > 0 && x.equals(UNDERSCORE)));

  if (!integer) {
    return nothing;
  }

  const radix = context.source.takeText(POINT);

  if (!radix) {
    return newIntegerNode(integer);
  }

  const fraction = context.source.takeWhile((x, i) => x.isDigit() || (i > 0 && x.equals(UNDERSCORE)));

  return newFloatNode(integer, radix, fraction);
}
