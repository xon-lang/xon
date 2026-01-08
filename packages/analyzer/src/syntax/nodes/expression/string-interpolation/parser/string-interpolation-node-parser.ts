import {
  $StringInterpolationItemNode,
  AnalyzerContext,
  BRACE_CLOSE,
  BRACE_OPEN,
  newStringInterpolationItemNode,
  newStringInterpolationNode,
  parseExpression,
  parseWhitespaceNode,
  STRING_INTERPOLATION_CLOSE,
  STRING_INTERPOLATION_OPEN,
  StringInterpolationItemNode,
  StringInterpolationNode,
} from '#analyzer';
import {newArrayData, nothing, Nothing} from '#core';

export function parseStringInterpolationNode(context: AnalyzerContext): StringInterpolationNode | Nothing {
  const open = context.source.takeText(STRING_INTERPOLATION_OPEN);

  if (!open) {
    return nothing;
  }

  const items = newArrayData<StringInterpolationItemNode>($StringInterpolationItemNode());

  while (true) {
    const item = parseInterpolationItem(context);

    if (!item) {
      break;
    }

    items.addLastItem(item);
  }

  const close = context.source.takeCharacter(STRING_INTERPOLATION_CLOSE);

  return newStringInterpolationNode(open, items, close);
}

function parseInterpolationItem(context: AnalyzerContext): StringInterpolationItemNode | Nothing {
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
