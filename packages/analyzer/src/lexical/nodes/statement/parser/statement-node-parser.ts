import {
  AnalyzerContext,
  newStatementNode,
  Node2,
  parseCommentNode,
  parseDocumentationNode,
  parseExpressionNode,
  parseNlNode,
  parsersToNodes,
  parseWhitespaceNode,
  StatementNode2,
} from '#analyzer';
import {ArrayData, newArrayData, Nothing} from '#common';

// todo make constant instead of function
function hiddenNodeParsers(): ArrayData<(context: AnalyzerContext) => Node2 | Nothing> {
  return newArrayData([parseDocumentationNode, parseCommentNode, parseWhitespaceNode, parseNlNode]);
}

// todo make constant instead of function
// function statementParsers() {
//   return newArrayData([]);
// }

export function parseStatementNode(
  context: AnalyzerContext,
  parent?: StatementNode2 | Nothing,
): StatementNode2 | Nothing {
  const beforeHiddenNodes = parsersToNodes(context, hiddenNodeParsers());
  // const parsers = statementParsers();
  const {node, errorNodes, afterHiddenNodes} = parseExpressionNode(context);

  return newStatementNode(parent, beforeHiddenNodes, node, errorNodes, afterHiddenNodes);
}

export function parseStatementNodes(context: AnalyzerContext): ArrayData<StatementNode2> {
  const nodes = newArrayData<StatementNode2>();

  while (true) {
    const node = parseStatementNode(context, nodes.last());
  }
}
