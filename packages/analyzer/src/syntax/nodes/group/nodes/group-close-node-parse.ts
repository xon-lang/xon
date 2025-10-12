import {
  AnalyzerContext,
  GroupCloseNode,
  parseAngleCloseNode,
  parseBraceCloseNode,
  parseBracketCloseNode,
  parseParenCloseNode,
} from '#analyzer';
import {Nothing} from '#common';

export function parseGroupCloseNode(context: AnalyzerContext): GroupCloseNode | Nothing {
  return (
    parseAngleCloseNode(context) ??
    parseBraceCloseNode(context) ??
    parseBracketCloseNode(context) ??
    parseParenCloseNode(context)
  );
}
