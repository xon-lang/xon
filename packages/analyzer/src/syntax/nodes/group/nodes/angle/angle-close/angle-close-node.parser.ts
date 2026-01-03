import {$AngleCloseNode, AnalyzerContext, ANGLE_CLOSE, AngleCloseNode} from '#analyzer';
import {Nothing} from '#core';

export function parseAngleCloseNode(context: AnalyzerContext): AngleCloseNode | Nothing {
  return context.source.takeText($AngleCloseNode(), ANGLE_CLOSE);
}
