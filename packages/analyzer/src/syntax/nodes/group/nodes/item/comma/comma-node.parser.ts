import {$CommaNode, AnalyzerContext, COMMA, CommaNode} from '#analyzer';
import {Nothing} from '#core';

export function parseCommaNode(context: AnalyzerContext): CommaNode | Nothing {
  return context.source.takeCharacter($CommaNode(), COMMA);
}
