import {
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
import {ArrayData, CharStream, newArrayData, nothing, Nothing} from '#common';

// todo make constant instead of function
function hiddenNodeParsers(): ArrayData<(source: CharStream) => Node2 | Nothing> {
  return newArrayData([parseDocumentationNode, parseCommentNode, parseWhitespaceNode, parseNlNode]);
}

// todo make constant instead of function
// function statementParsers() {
//   return newArrayData([]);
// }

export function parseStatementNode(source: CharStream): StatementNode2 | Nothing {
  const beforeHiddenNodes = parsersToNodes(source, hiddenNodeParsers());
  // const parsers = statementParsers();
  const {node, errorNodes, afterHiddenNodes} = parseExpressionNode(source);

  return newStatementNode(nothing, beforeHiddenNodes, node, errorNodes, afterHiddenNodes);
}
