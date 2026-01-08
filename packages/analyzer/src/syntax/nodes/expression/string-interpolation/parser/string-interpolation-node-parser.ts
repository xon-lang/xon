import {
  $StringInterpolationItemNode,
  AnalyzerContext,
  newStringInterpolationNode,
  parseInterpolationItem,
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
