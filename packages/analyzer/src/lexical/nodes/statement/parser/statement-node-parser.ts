import {
  $KeywordNode,
  $NlNode,
  AnalyzerContext,
  collapseInvokeNode,
  collapseMemberNode,
  KeywordNode,
  newEofNode,
  Node2,
  NodeParserFunction,
  parseCharacterNode,
  parseCommaNode,
  parseCommentNode,
  parseDocumentationNode,
  parseExpressionStatementNode,
  parseGroupCloseNode,
  parseGroupNode,
  parseIdKeywordOperatorNode,
  parseIfStatementNode,
  parseJoiningNode,
  parseNlNode,
  parseNumberNode,
  parseStringNode,
  parseSymbolOperatorNode,
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

export type StatementParserFunction<T extends StatementNode2 = StatementNode2> = (
  indent: Integer,
  keyword: KeywordNode,
  nodes: ArrayData<Node2>,
) => T | Nothing;

function statementParsers(): ArrayData<StatementParserFunction> {
  return newArrayData([parseIfStatementNode]);
}

function handleStatement(lastStatement: StatementNode2 | Nothing, nodes: ArrayData<Node2>): StatementNode2 {
  const firstNode = nodes.first()!;
  const parentStatement = getParentStatement(lastStatement, firstNode.range.start);
  const indent = (parentStatement?.indent ?? -1) + 1;
  let statement: StatementNode2 | Nothing;

  if (is(firstNode, $KeywordNode)) {
    nodes = nodes.slice(1);
    statement = statementParsers().firstMap((parse) => parse(indent, firstNode, nodes));
  }

  statement ??= parseExpressionStatementNode(indent, nodes);

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

  if (indentPosition.column > statement.range.start.column) {
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

      const deleteCount = result.node.children?.count() ?? 0;
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
    parseSymbolOperatorNode,
    parseIdKeywordOperatorNode,
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
    const node = nodeParsers().firstMap((parse) => parse(context));

    if (!node) {
      break;
    }

    if (node.isHidden) {
      hiddenNodes.addLastItem(node);
    } else if (!hiddenNodes.isEmpty()) {
      node.hiddenNodes = hiddenNodes;
      hiddenNodes = newArrayData();
    }

    yield node;
  }

  const lastNodePosition = hiddenNodes.last()?.range.stop ?? newTextPosition();

  if (!hiddenNodes.isEmpty()) {
    const eofRange = newTextRange(lastNodePosition);
    const eofNode = newEofNode(eofRange);
    eofNode.hiddenNodes = hiddenNodes;

    yield eofNode;
  }
}
