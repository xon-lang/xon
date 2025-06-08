import {
  AnalyzerContext,
  newStringNode,
  parseStringCloseNode,
  parseStringContentNode,
  parseStringOpenNode,
  StringNode,
} from '#analyzer';
import {newText, nothing, Nothing} from '#common';

export function parseStringNode(context: AnalyzerContext): StringNode | Nothing {
  const openNode = parseStringOpenNode(context);

  if (!openNode) {
    return nothing;
  }

  const contentNode = parseStringContentNode(context);
  const closeNode = parseStringCloseNode(context);

  if (!closeNode) {
    context.addError(openNode.range, newText(`Close token expect`));
  }

  return newStringNode(openNode, contentNode, closeNode);
}
