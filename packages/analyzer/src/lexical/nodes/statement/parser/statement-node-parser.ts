import {
  $NlNode,
  AnalyzerContext,
  collapseInvokeNode,
  collapseMemberNode,
  newEofNode,
  newStatementNode,
  Node2,
  NodeParserFunction,
  parseCharacterNode,
  parseCommaNode,
  parseCommentNode,
  parseDocumentationNode,
  parseGroupCloseNode,
  parseGroupNode,
  parseIdNode,
  parseJoiningNode,
  parseNlNode,
  parseNumberNode,
  parseOperatorNode,
  parseStringNode,
  parseUnknownNode,
  parseWhitespaceNode,
  StatementNode2,
  SyntaxNode2,
} from '#analyzer';
import {
  ArrayData,
  Boolean2,
  Integer,
  newArrayData,
  newTextPosition,
  newTextRange,
  Nothing,
  nothing,
  TextPosition,
} from '#common';
import {is} from '#typing';

export type SyntaxCollapseFn = (nodes: ArrayData<Node2>, startIndex: Integer) => SyntaxCollapseResult;
export type SyntaxCollapseResult = {index: Integer; node: SyntaxNode2} | Nothing;

function nodeCollapses(): ArrayData<{min: Integer; collapse: SyntaxCollapseFn}> {
  return newArrayData([
    {min: 2, collapse: collapseInvokeNode},
    {min: 2, collapse: collapseMemberNode},
  ]);
}

export function parseStatements(
  context: AnalyzerContext,
  predicate?: ((node: Node2) => Boolean2) | Nothing,
): {
  statements: ArrayData<StatementNode2>;
  breakNode?: Node2 | Nothing;
} {
  let lastStatement: StatementNode2 | Nothing = nothing;
  let statements = newArrayData<StatementNode2>();
  let breakNode: Node2 | Nothing = nothing;
  let nodes = newArrayData<Node2>();

  const handle = () => {
    if (nodes.isEmpty()) {
      return;
    }

    const statement = handleStatement(lastStatement, nodes);

    nodes = newArrayData();

    if (!statement?.parent) {
      statements.addLastItem(statement);
    }

    lastStatement = statement;
  };

  for (const node of nodeGenerator(context)) {
    if (predicate && predicate(node)) {
      breakNode = node;

      break;
    }

    if (node.isHidden) {
      if (is(node, $NlNode)) {
        handle();
      }

      continue;
    }

    nodes.addLastItem(node);
  }

  handle();

  // this.formatterManager.formatRemainingHiddenNodes(statements, lastStatement, hiddenNodes);

  return {
    statements,
    breakNode,
  };
}

function handleStatement(lastStatement: StatementNode2 | Nothing, nodes: ArrayData<Node2>): StatementNode2 {
  const parentStatement = getParentStatement(lastStatement, nodes.first()!.range.start);
  nodes = collapseNodes(nodes);
  const value = nodes.first()!;
  const errorNodes = nodes.slice(1);
  const statement = newStatementNode(parentStatement, value, errorNodes);

  if (parentStatement) {
    parentStatement.body ??= newArrayData();
    parentStatement.body.addLastItem(statement);
  }

  return statement;
}

function getParentStatement(
  statement: StatementNode2 | Nothing,
  indentPosition: TextPosition,
): StatementNode2 | Nothing {
  if (!statement) {
    return nothing;
  }

  if (indentPosition.column > statement.value.range.start.column) {
    return statement;
  }

  return getParentStatement(statement.parent, indentPosition);
}

export function collapseNodes(nodes: ArrayData<Node2>): ArrayData<Node2> {
  if (nodes.isEmpty()) {
    return nodes;
  }

  for (const {min, collapse} of nodeCollapses()) {
    if (nodes.count() < min) {
      continue;
    }

    let index = 0;

    while (true) {
      const result = collapse(nodes, index);

      if (!result) {
        break;
      }

      const deleteCount = result.node.children.count();
      nodes = nodes.replaceItem(result.index, deleteCount, result.node);
      index = result.index + 1;

      if (index >= nodes.count() || nodes.count() < min) {
        break;
      }
    }
  }

  return nodes;
}

function nodeParsers(): ArrayData<NodeParserFunction> {
  return newArrayData([
    parseWhitespaceNode,
    parseNlNode,
    parseStringNode,
    parseCharacterNode,
    parseNumberNode,
    parseOperatorNode,
    parseIdNode,
    parseGroupNode,
    parseCommaNode,
    parseGroupCloseNode,
    parseDocumentationNode,
    parseCommentNode,
    parseJoiningNode,
    parseUnknownNode,
  ]);
}

function* nodeGenerator(context: AnalyzerContext): Generator<Node2> {
  let hiddenNodes = newArrayData<Node2>();

  while (true) {
    const node = nodeParsers().findMap((parse) => parse(context));

    if (!node) {
      break;
    }

    if (node.isHidden) {
      hiddenNodes.addLastItem(node);
    } else {
      node.hiddenNodes = hiddenNodes;
      hiddenNodes = newArrayData();
    }

    yield node;
  }

  const lastNodePosition = hiddenNodes.last()?.range.stop ?? newTextPosition();

  if (!hiddenNodes.isEmpty()) {
    yield newEofNode(newTextRange(lastNodePosition));
  }
}
