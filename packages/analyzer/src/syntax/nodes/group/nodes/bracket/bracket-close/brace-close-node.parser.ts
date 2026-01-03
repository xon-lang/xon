import {$BracketCloseNode, AnalyzerContext, BRACKET_CLOSE, BracketCloseNode} from '#analyzer';
import {Nothing} from '#core';

export function parseBracketCloseNode(context: AnalyzerContext): BracketCloseNode | Nothing {
  return context.source.takeCharacter($BracketCloseNode(), BRACKET_CLOSE);
}
