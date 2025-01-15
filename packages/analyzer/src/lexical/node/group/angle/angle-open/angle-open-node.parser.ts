import {$AngleOpenNode, ANGLE_OPEN, AngleOpenNode} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseAngleOpenNode(source: CharStream): AngleOpenNode | Nothing {
  return source.takeWhile($AngleOpenNode, (x, i) => ANGLE_OPEN.at2(i).equals(x), ANGLE_OPEN.count());
}
