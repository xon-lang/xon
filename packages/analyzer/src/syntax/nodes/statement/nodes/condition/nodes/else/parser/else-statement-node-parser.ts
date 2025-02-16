import {$ElseKeywordNode, ElseStatementNode, newElseStatementNode, Node} from '#analyzer';
import {ArrayData, Integer, Nothing, nothing} from '#common';
import {is} from '#typing';

export function parseElseStatementNode(
  indentLevel: Integer,
  nodes: ArrayData<Node>,
): ElseStatementNode | Nothing {
  const keywordNode = nodes.first();

  if (!is(keywordNode, $ElseKeywordNode())) {
    return nothing;
  }

  return newElseStatementNode(indentLevel, keywordNode, nodes.slice(1));
}
