import {$ParenOpenNode, AnalyzerContext, PAREN_OPEN, ParenOpenNode} from '#analyzer';
import {Nothing} from '#core';

export function parseParenOpenNode(context: AnalyzerContext): ParenOpenNode | Nothing {
  return context.source.takeCharacter($ParenOpenNode(), PAREN_OPEN);
}
