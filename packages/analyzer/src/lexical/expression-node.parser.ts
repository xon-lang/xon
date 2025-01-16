import {
  collapseMemberNode,
  Node2,
  NodeParserFunction,
  parseCharNode,
  parseCommaNode,
  parseIdNode,
  parseNumberNode,
  parseOperatorNode,
  parsersToNodes,
  parseStringNode,
  parseWhitespaceNode,
  SyntaxNode2,
} from '#analyzer';
import {ArrayData, CharStream, Integer, newArrayData, Nothing} from '#common';

export type ExpressionNodeParseResult<T extends Node2 = Node2> = {
  node: T | Nothing;
  errorNodes: ArrayData<Node2>;
  hiddenNodes: ArrayData<Node2>;
};

// todo make constant instead of function
function expressionParsers(): ArrayData<NodeParserFunction> {
  return newArrayData([
    parseCommaNode,
    parseNumberNode,
    parseCharNode,
    parseStringNode,
    parseOperatorNode,
    parseIdNode,
    parseWhitespaceNode,
  ]);
}

export function parseExpressionNode(source: CharStream): ExpressionNodeParseResult {
  const {nodes, hiddenNodes} = parseExpressionNodes(source);
  const collapsedNodes = collapseExpressionNodes(nodes);
  const node = collapsedNodes.first();
  const errorNodes = collapsedNodes.slice(1);

  return {node, errorNodes, hiddenNodes};
}

export function parseExpressionNodes(source: CharStream): {
  nodes: ArrayData<Node2>;
  hiddenNodes: ArrayData<Node2>;
} {
  const expressionRelatedNodes = parsersToNodes(source, expressionParsers());
  const nodes = newArrayData<Node2>();
  let hiddenNodes = newArrayData<Node2>();

  for (const node of expressionRelatedNodes) {
    if (node.isHidden) {
      hiddenNodes.addLastItem(node);
    } else {
      node.hiddenNodes = hiddenNodes;
      hiddenNodes = newArrayData<Node2>();
      nodes.addLastItem(node);
    }
  }

  return {nodes, hiddenNodes};
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
