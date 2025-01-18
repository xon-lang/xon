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
  parsersToNodes,
  parseStringNode,
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
  ]);
}

export function parseExpressionNode(context: AnalyzerContext): {
  node: Node2 | Nothing;
  errorNodes: ArrayData<Node2>;
  afterHiddenNodes: ArrayData<Node2>;
} {
  const {nodes, afterHiddenNodes} = parseExpressionNodes(context);
  const collapsedNodes = collapseExpressionNodes(nodes);
  const node = collapsedNodes.first();
  const errorNodes = collapsedNodes.slice(1);

  return {node, errorNodes, afterHiddenNodes};
}

export function parseExpressionNodes(context: AnalyzerContext): {
  nodes: ArrayData<Node2>;
  afterHiddenNodes: ArrayData<Node2>;
} {
  const expressionRelatedNodes = parsersToNodes(context, expressionParsers());
  const nodes = newArrayData<Node2>();
  let afterHiddenNodes = newArrayData<Node2>();

  for (const node of expressionRelatedNodes) {
    if (node.isHidden) {
      afterHiddenNodes.addLastItem(node);
    } else {
      node.hiddenNodes = afterHiddenNodes;
      afterHiddenNodes = newArrayData<Node2>();
      nodes.addLastItem(node);
    }
  }

  return {nodes, afterHiddenNodes};
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
