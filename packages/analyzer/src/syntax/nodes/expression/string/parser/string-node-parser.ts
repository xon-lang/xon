import {AnalyzerContext, newStringNode, STRING_CLOSE, STRING_OPEN, StringNode} from '#analyzer';
import {newText, nothing, Nothing} from '#core';

export function parseStringNode(context: AnalyzerContext): StringNode | Nothing {
  const openNode = context.source.takeCharacter(STRING_OPEN);

  if (!openNode) {
    return nothing;
  }

  const contentNode = context.source.takeWhile((x) => !x.equals(STRING_CLOSE));
  const closeNode = context.source.takeCharacter(STRING_CLOSE);

  if (!closeNode) {
    context.addError(openNode.range, newText(`Close token expect`));
  }

  return newStringNode(openNode, contentNode, closeNode);
}
