import {
  AnalyzerContext,
  GroupOpenNode,
  parseAngleOpenNode,
  parseBraceOpenNode,
  parseBracketOpenNode,
  parseParenOpenNode,
} from '#analyzer';
import {Nothing} from '#common';

export function parseGroupOpenNode(context: AnalyzerContext): GroupOpenNode | Nothing {
  return (
    parseAngleOpenNode(context) ??
    parseBraceOpenNode(context) ??
    parseBracketOpenNode(context) ??
    parseParenOpenNode(context)
  );
}
  