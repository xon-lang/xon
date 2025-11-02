import {$RadixPointNode, AnalyzerContext, POINT, RadixPointNode} from '#analyzer';
import {Nothing} from '#core';

export function parseRadixPointNode(context: AnalyzerContext): RadixPointNode | Nothing {
  return context.source.takeWhile($RadixPointNode(), (x, i) => POINT.at2(i).equals(x), POINT.count());
}
