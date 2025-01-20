import {$RadixPointNode, AnalyzerContext, POINT, RadixPointNode} from '#analyzer';
import {Nothing} from '#common';

export function parseRadixPointNode(context: AnalyzerContext): RadixPointNode | Nothing {
  return context.source.takeWhile($RadixPointNode, (x, i) => POINT.at2(i).equals(x), POINT.count());
}
