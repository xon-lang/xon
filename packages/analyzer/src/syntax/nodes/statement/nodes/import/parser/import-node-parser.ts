import {
  $AsInfixNode,
  $ImportKeywordNode,
  $StringNode,
  AnalyzerContext,
  collapseNodes,
  IMPORT,
  ImportNode,
  newImportNode,
  Node,
  parseStringNode,
  parseWhitespaceNode,
} from '#analyzer';
import {ArrayData, is, newText, Nothing, nothing} from '#core';

export function parseImportNode_(context: AnalyzerContext, nodes: ArrayData<Node>): ImportNode | Nothing {
  const keyword = nodes.first();

  if (!is(keyword, $ImportKeywordNode())) {
    return nothing;
  }

  nodes = collapseNodes(context, nodes.slice(1));
  const expression = nodes.first();

  if (is(expression, $StringNode()) || is(expression, $AsInfixNode())) {
    context.extraNodes.addLastItems(nodes.slice(1));

    return newImportNode(keyword, expression);
  }

  context.extraNodes.addLastItems(nodes);
  context.addError((expression ?? keyword).range, newText(`Expression expect`));

  return newImportNode(keyword, nothing);
}

export function parseImportNode2(context: AnalyzerContext): ImportNode | Nothing {
  const keyword = context.source.takeWord($ImportKeywordNode(), IMPORT);

  if (!keyword) {
    return nothing;
  }

  parseWhitespaceNode(context);
  const expression = parseStringNode(context); // todo add AsInfixNode

  // if (!is(expression, $StringNode()) && !is(expression, $AsInfixNode())) {
  //   context.addError((expression ?? keyword).range, newText(`Expression expect`));
  // }

  return newImportNode(keyword, expression);
}
