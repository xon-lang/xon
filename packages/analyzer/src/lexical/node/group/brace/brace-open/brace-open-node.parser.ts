import {$BraceOpenNode, BRACE_OPEN, BraceOpenNode} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseBraceOpenNode(source: CharStream): BraceOpenNode | Nothing {
  return source.takeWhile($BraceOpenNode, (x, i) => BRACE_OPEN.at2(i).equals(x), BRACE_OPEN.count());
}
