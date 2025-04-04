import {
  $AsInfixNode,
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
  const keyword = nodes.first();

  if (!is(keyword, $ImportKeywordNode())) {
    return nothing;
  }

  nodes = collapseNodes(nodes.slice(1));
  const expression = nodes.first();

  if (is(expression, $StringNode()) || is(expression, $AsInfixNode())) {
    return newImportStatementNode(indent, keyword, expression, nodes.slice(1));
  }

  return newImportStatementNode(indent, keyword, nothing, nodes);
}
