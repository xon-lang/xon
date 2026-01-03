import {
  $NlNode,
  $Node,
  AnalyzerContext,
  BodyNode,
  collapseBody,
  newBodyNode,
  Node,
  nodeGenerator,
  parseDeclarationStatementNode,
  parseElseStatementNode,
  parseExpressionStatementNode,
  parseIfStatementNode,
  parseImportStatementNode,
  parseReturnStatementNode,
  SyntaxNode,
} from '#analyzer';
import {$Model, ArrayData, Boolean2, is, newArrayData, Nothing, nothing, TextPosition} from '#core';

export function parseStatements(
  context: AnalyzerContext,
  predicate?: ((node: Node) => Boolean2) | Nothing,
): {
  // todo use BodyNode
  statements: ArrayData<SyntaxNode>;
  breakNode?: Node | Nothing;
} {
  let lastStatement: SyntaxNode | Nothing = nothing;
  let body = newBodyNode();
  let breakNode: Node | Nothing = nothing;
  let nodes = newArrayData<SyntaxNode>($Node(), []);

  const handle = () => {
    if (nodes.isEmpty()) {
      return;
    }

    lastStatement = handleStatement(context, body, lastStatement, nodes);
    nodes = newArrayData($Node());
  };

  for (const node of nodeGenerator(context)) {
    if (predicate && predicate(node)) {
      breakNode = node;

      break;
    }

    if (node.isHidden) {
      if (is(node, $NlNode())) {
        handle();
      }

      continue;
    }

    nodes.addLastItem(node);
  }

  handle();

  // todo can we remove it?
  body.children = collapseBody(body);

  return {
    statements: body.children,
    breakNode,
  };
}

export type StatementParserFunction<T extends SyntaxNode = SyntaxNode> = (
  context: AnalyzerContext,
  nodes: ArrayData<SyntaxNode>,
  parent?: SyntaxNode | Nothing,
) => T | Nothing;

function statementParsers(): ArrayData<StatementParserFunction> {
  return newArrayData($Model(), [
    parseImportStatementNode,
    parseDeclarationStatementNode,
    parseIfStatementNode,
    parseElseStatementNode,
    parseReturnStatementNode,
    parseExpressionStatementNode,
  ]);
}

function handleStatement(
  context: AnalyzerContext,
  body: BodyNode,
  lastStatement: SyntaxNode | Nothing,
  nodes: ArrayData<SyntaxNode>,
): SyntaxNode {
  const parent = lastStatement ? getParentNodeForIndent(lastStatement, nodes.first()!.range.start) : nothing;
  const node = statementParsers().firstMap((parse) => parse(context, nodes, parent)) ?? nodes.at2(0);

  if (parent) {
    if (!parent.body) {
      parent.body = newBodyNode();
      parent.children ??= newArrayData($Node());
      parent.children.addLastItem(parent.body);
      parent.body.parent = parent;
    }

    parent.body.addNode(node);
  } else {
    body.addNode(node);
  }

  return node;
}

function getParentNodeForIndent(parentNode: SyntaxNode, childPosition: TextPosition): SyntaxNode | Nothing {
  if (childPosition.column > parentNode.range.start.column) {
    return parentNode;
  }

  if (parentNode.parent?.parent) {
    return getParentNodeForIndent(parentNode.parent.parent, childPosition);
  }

  return nothing;
}
