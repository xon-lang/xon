import {$ParenCloseNode, AnalyzerContext, PAREN_CLOSE, ParenCloseNode} from '#analyzer';
import {Nothing} from '#core';

export function parseParenCloseNode(context: AnalyzerContext): ParenCloseNode | Nothing {
  return context.source.takeCharacter($ParenCloseNode(), PAREN_CLOSE);
}
