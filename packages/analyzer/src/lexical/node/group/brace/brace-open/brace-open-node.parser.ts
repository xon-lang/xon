import {$BraceOpenNode, AnalyzerContext, BRACE_OPEN, BraceOpenNode} from '#analyzer';
import {Nothing} from '#common';

export function parseBraceOpenNode(context: AnalyzerContext): BraceOpenNode | Nothing {
  return context.source.takeWhile($BraceOpenNode, (x, i) => BRACE_OPEN.at2(i).equals(x), BRACE_OPEN.count());
}
