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
import {ArrayData, Integer, newText, Nothing, nothing} from '#common';
import {is} from '#typing';

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
    return newImportStatementNode(indent, keyword, expression, nodes.slice(1));
  }

  context.addError((expression ?? keyword).range, newText(`Expression expect`));

  return newImportStatementNode(indent, keyword, nothing, nodes);
}
