import {$BraceOpenNode, AnalyzerContext, BRACE_OPEN, BraceOpenNode} from '#analyzer';
import {Nothing} from '#core';

export function parseBraceOpenNode(context: AnalyzerContext): BraceOpenNode | Nothing {
  return context.source.takeCharacter($BraceOpenNode(), BRACE_OPEN);
}
