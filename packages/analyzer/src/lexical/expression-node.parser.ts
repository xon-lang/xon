import {
  AnalyzerContext,
  collapseMemberNode,
  Node2,
  NodeParserFunction,
  parseCharacterNode,
  parseCommentNode,
  parseIdNode,
  parseNumberNode,
  parseOperatorNode,
  parsersToNodesCleanupHidden,
  parseStringNode,
  parseUnknownNode,
  parseWhitespaceNode,
  SyntaxNode2,
} from '#analyzer';
import {ArrayData, Integer, newArrayData, Nothing} from '#common';

// todo make constant instead of function
function expressionParsers(): ArrayData<NodeParserFunction> {
  return newArrayData([
    parseNumberNode,
    parseCharacterNode,
    parseStringNode,
    parseOperatorNode,
    parseIdNode,
    parseWhitespaceNode,
    parseCommentNode,
    parseUnknownNode,
  ]);
}


export function parseExpressionNodes(context: AnalyzerContext): {
  nodes: ArrayData<Node2>;
  afterHiddenNodes: ArrayData<Node2>;
} {
  return parsersToNodesCleanupHidden(context, expressionParsers());
}

export type SyntaxCollapseResult = {index: Integer; node: SyntaxNode2} | Nothing;
export type SyntaxCollapseFn = (nodes: ArrayData<Node2>, startIndex: Integer) => SyntaxCollapseResult;

// todo make constant instead of function
function expressionCollapses() {
  return newArrayData([collapseMemberNode]);
}

export function collapseExpressionNodes(nonHiddenNodes: ArrayData<Node2>): ArrayData<Node2> {
  if (nonHiddenNodes.isEmpty()) {
    return nonHiddenNodes;
  }

  const collapses = expressionCollapses();

  for (const collapse of collapses) {
    while (true) {
      const result = collapse(nonHiddenNodes);

      if (!result) {
        break;
      }

      const {index, node} = result;
      const deleteCount = node.children.count();
      nonHiddenNodes = nonHiddenNodes.replace(index, deleteCount, newArrayData([node]));
    }
  }

  return nonHiddenNodes;
}
