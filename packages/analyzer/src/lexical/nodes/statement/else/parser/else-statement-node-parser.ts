import {$ElseKeywordNode, ElseStatementNode, newElseStatementNode, Node2} from '#analyzer';
import {ArrayData, Integer, Nothing, nothing} from '#common';
import {is} from '#typing';

export function parseElseStatementNode(
  indentLevel: Integer,
  nodes: ArrayData<Node2>,
): ElseStatementNode | Nothing {
  const keywordNode = nodes.first();

  if (!is(keywordNode, $ElseKeywordNode)) {
    return nothing;
  }

  return newElseStatementNode(indentLevel, keywordNode, nodes.slice(1));
}
