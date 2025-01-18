import {$RadixPointNode, AnalyzerContext, RADIX_POINT, RadixPointNode} from '#analyzer';
import {Nothing} from '#common';

export function parseRadixPointNode(context: AnalyzerContext): RadixPointNode | Nothing {
  return context.source.takeWhile(
    $RadixPointNode,
    (x, i) => RADIX_POINT.at2(i).equals(x),
    RADIX_POINT.count(),
  );
}
