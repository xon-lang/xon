import {$ElseKeywordNode, AnalyzerContext, ElseStatementNode, newElseStatementNode, Node} from '#analyzer';
import {ArrayData, Integer, Nothing, nothing} from '#core';
import {is} from '#typing';

export function parseElseStatementNode(
  context: AnalyzerContext,
  indentLevel: Integer,
  nodes: ArrayData<Node>,
): ElseStatementNode | Nothing {
  const keywordNode = nodes.first();

  if (!is(keywordNode, $ElseKeywordNode())) {
    return nothing;
  }

  context.extraNodes.addLastItems(nodes.slice(1));

  return newElseStatementNode(indentLevel, keywordNode);
}
