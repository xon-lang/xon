import {$BracketOpenNode, AnalyzerContext, BRACKET_OPEN, BracketOpenNode} from '#analyzer';
import {Nothing} from '#core';

export function parseBracketOpenNode(context: AnalyzerContext): BracketOpenNode | Nothing {
  return context.source.takeCharacter($BracketOpenNode(), BRACKET_OPEN);
}
