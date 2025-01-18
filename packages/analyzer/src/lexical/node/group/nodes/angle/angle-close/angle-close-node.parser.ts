import {$AngleCloseNode, AnalyzerContext, ANGLE_CLOSE, AngleCloseNode} from '#analyzer';
import {Nothing} from '#common';

export function parseAngleCloseNode(context: AnalyzerContext): AngleCloseNode | Nothing {
  return context.source.takeWhile(
    $AngleCloseNode,
    (x, i) => ANGLE_CLOSE.at2(i).equals(x),
    ANGLE_CLOSE.count(),
  );
}
