import {$AngleCloseNode, ANGLE_CLOSE, AngleCloseNode} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseAngleCloseNode(source: CharStream): AngleCloseNode | Nothing {
  return source.takeWhile($AngleCloseNode, (x, i) => ANGLE_CLOSE.at2(i).equals(x), ANGLE_CLOSE.count());
}
