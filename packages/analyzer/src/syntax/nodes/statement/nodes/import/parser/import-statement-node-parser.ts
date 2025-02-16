import {
  $ImportKeywordNode,
  $StringNode,
  collapseNodes,
  ImportStatementNode,
  newImportStatementNode,
  Node,
} from '#analyzer';
import {ArrayData, Integer, Nothing, nothing} from '#common';
import {is} from '#typing';

export function parseImportStatementNode(
  indent: Integer,
  nodes: ArrayData<Node>,
): ImportStatementNode | Nothing {
  const keywordNode = nodes.first();

  if (!is(keywordNode, $ImportKeywordNode())) {
    return nothing;
  }

  nodes = collapseNodes(nodes.slice(1));
  const expressionNode = nodes.first();

  if (is(expressionNode, $StringNode())) {
    return newImportStatementNode(indent, keywordNode, expressionNode, nodes.slice(1));
  }

  return newImportStatementNode(indent, keywordNode, nothing, nodes);
}
