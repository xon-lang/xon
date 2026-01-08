import {
  AnalyzerContext,
  GroupCloseNode,
  parseAngleCloseNode,
  parseBraceCloseNode,
  parseBracketCloseNode,
  parseParenCloseNode,
} from '#analyzer';
import {Nothing} from '#core';

export function parseGroupCloseNode(context: AnalyzerContext): GroupCloseNode | Nothing {
  return (
    parseAngleCloseNode(context) ??
    context.source.takeCharacter($BraceCloseNode(), BRACE_CLOSE) ??
    parseBracketCloseNode(context) ??
    parseParenCloseNode(context)
  );
}
