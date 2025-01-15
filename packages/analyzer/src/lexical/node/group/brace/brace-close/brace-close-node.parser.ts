import {$BraceCloseNode, BRACE_CLOSE, BraceCloseNode} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseBraceCloseNode(source: CharStream): BraceCloseNode | Nothing {
  return source.takeWhile($BraceCloseNode, (x, i) => BRACE_CLOSE.at2(i).equals(x), BRACE_CLOSE.count());
}
