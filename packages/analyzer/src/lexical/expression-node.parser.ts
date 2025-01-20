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
} from '#analyzer';
import {ArrayData, newArrayData} from '#common';

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
      nonHiddenNodes = nonHiddenNodes.replaceItems(index, deleteCount, newArrayData([node]));
    }
  }

  return nonHiddenNodes;
}
