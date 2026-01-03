import {$StringCloseNode, AnalyzerContext, STRING_CLOSE, StringCloseNode} from '#analyzer';
import {Nothing} from '#core';

export function parseStringCloseNode(context: AnalyzerContext): StringCloseNode | Nothing {
  return context.source.takeCharacter($StringCloseNode(), STRING_CLOSE);
}
