import {
  $BraceCloseNode,
  $StringInterpolationItemNode,
  AnalyzerContext,
  BraceCloseNode,
  BraceOpenNode,
  newStringInterpolationItemNode,
  newStringInterpolationNode,
  parseBraceOpenNode,
  parseInterpolationStringContentNode,
  parseStatements,
  parseStringInterpolationCloseNode,
  parseStringInterpolationOpenNode,
  StatementNode,
  StringInterpolationItemNode,
  StringInterpolationNode,
} from '#analyzer';
import {ArrayData, newArrayData, nothing, Nothing} from '#common';
import {is} from '#typing';

export function parseStringInterpolationNode(context: AnalyzerContext): StringInterpolationNode | Nothing {
  const openNode = parseStringInterpolationOpenNode(context);

  if (!openNode) {
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

  const closeNode = parseStringInterpolationCloseNode(context);

  return newStringInterpolationNode(openNode, items, closeNode);
}

function parseInterpolationItem(context: AnalyzerContext): StringInterpolationItemNode | Nothing {
  const content = parseInterpolationStringContentNode(context);

  const result = parseInterpolationStatements(context);

  if (!content && !result) {
    return nothing;
  }

  return newStringInterpolationItemNode(content, result?.open, result?.statements, result?.close);
}

function parseInterpolationStatements(
  context: AnalyzerContext,
): {open: BraceOpenNode; statements: ArrayData<StatementNode>; close?: BraceCloseNode | Nothing} | Nothing {
  const open = parseBraceOpenNode(context);

  if (!open) {
    return nothing;
  }

  while (true) {
    const {breakNode, statements} = parseStatements(context, (node) => is(node, $BraceCloseNode()));

    if (is(breakNode, $BraceCloseNode())) {
      return {open, statements, close: breakNode};
    }

    return {open, statements, close: nothing};
  }
}
