import {$BraceCloseNode, AnalyzerContext, BRACE_CLOSE, BraceCloseNode} from '#analyzer';
import {Nothing} from '#core';

export function parseBraceCloseNode(context: AnalyzerContext): BraceCloseNode | Nothing {
  return context.source.takeCharacter($BraceCloseNode(), BRACE_CLOSE);
}
