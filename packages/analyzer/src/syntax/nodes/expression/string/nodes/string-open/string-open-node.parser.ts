import {$StringOpenNode, AnalyzerContext, STRING_OPEN, StringOpenNode} from '#analyzer';
import {Nothing} from '#core';

export function parseStringOpenNode(context: AnalyzerContext): StringOpenNode | Nothing {
  return context.source.takeCharacter($StringOpenNode(), STRING_OPEN);
}
