import {$RadixPointNode, AnalyzerContext, POINT, RadixPointNode} from '#analyzer';
import {Nothing} from '#core';

export function parseRadixPointNode(context: AnalyzerContext): RadixPointNode | Nothing {
  return context.source.takeText($RadixPointNode(), POINT);
}
