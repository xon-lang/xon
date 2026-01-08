import {
  AnalyzerContext,
  BRACE_CLOSE,
  BRACE_OPEN,
  newStringInterpolationItemNode,
  parseExpression,
  parseWhitespaceNode,
  STRING_INTERPOLATION_CLOSE,
  StringInterpolationItemNode,
} from '#analyzer';
import {nothing, Nothing} from '#core';

export function parseInterpolationItem(context: AnalyzerContext): StringInterpolationItemNode | Nothing {
  const content = context.source.takeWhile(
    (x) => !x.equals(BRACE_OPEN) && !x.equals(STRING_INTERPOLATION_CLOSE),
  );

  const open = context.source.takeCharacter(BRACE_OPEN);

  if (!open && !content) {
    return nothing;
  }

  if (!open) {
    return newStringInterpolationItemNode(content, nothing, nothing, nothing);
  }

  parseWhitespaceNode(context);
  const expression = parseExpression(context);
  parseWhitespaceNode(context);
  const close = context.source.takeCharacter(BRACE_CLOSE);

  return newStringInterpolationItemNode(content, open, expression, close);
}
