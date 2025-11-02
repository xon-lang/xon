import {
  $AsInfixNode,
  $ImportKeywordNode,
  $StringNode,
  AnalyzerContext,
  collapseNodes,
  ImportStatementNode,
  newImportStatementNode,
  Node,
} from '#analyzer';
import {ArrayData, Integer, is, newText, Nothing, nothing} from '#core';

export function parseImportStatementNode(
  context: AnalyzerContext,
  indent: Integer,
  nodes: ArrayData<Node>,
): ImportStatementNode | Nothing {
  const keyword = nodes.first();

  if (!is(keyword, $ImportKeywordNode())) {
    return nothing;
  }

  nodes = collapseNodes(context, nodes.slice(1));
  const expression = nodes.first();

  if (is(expression, $StringNode()) || is(expression, $AsInfixNode())) {
    context.extraNodes.addLastItems(nodes.slice(1));

    return newImportStatementNode(indent, keyword, expression);
  }

  context.extraNodes.addLastItems(nodes);
  context.addError((expression ?? keyword).range, newText(`Expression expect`));

  return newImportStatementNode(indent, keyword, nothing);
}
