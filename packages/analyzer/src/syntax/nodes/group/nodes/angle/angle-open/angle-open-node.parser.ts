import {$AngleOpenNode, AnalyzerContext, ANGLE_OPEN, AngleOpenNode} from '#analyzer';
import {Nothing} from '#core';

export function parseAngleOpenNode(context: AnalyzerContext): AngleOpenNode | Nothing {
  return context.source.takeText($AngleOpenNode(), ANGLE_OPEN);
}
