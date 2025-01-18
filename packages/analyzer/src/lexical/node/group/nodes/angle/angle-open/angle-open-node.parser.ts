import {$AngleOpenNode, AnalyzerContext, ANGLE_OPEN, AngleOpenNode} from '#analyzer';
import {Nothing} from '#common';

export function parseAngleOpenNode(context: AnalyzerContext): AngleOpenNode | Nothing {
  return context.source.takeWhile($AngleOpenNode, (x, i) => ANGLE_OPEN.at2(i).equals(x), ANGLE_OPEN.count());
}
