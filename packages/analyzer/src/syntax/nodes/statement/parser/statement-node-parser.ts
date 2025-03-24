import {
  $NlNode,
  AnalyzerContext,
  collapseStatements,
  newUnknownStatementNode,
  Node,
  nodeGenerator,
  parseDeclarationStatementNode,
  parseElseStatementNode,
  parseExpressionStatementNode,
  parseIfStatementNode,
  parseImportStatementNode,
  parseReturnStatementNode,
  StatementNode,
} from '#analyzer';
import {ArrayData, Boolean2, Integer, newArrayData, Nothing, nothing, TextPosition} from '#common';
import {is} from '#typing';

export function parseStatements(
  context: AnalyzerContext,
  predicate?: ((node: Node) => Boolean2) | Nothing,
): {
  statements: ArrayData<StatementNode>;
  breakNode?: Node | Nothing;
} {
  let lastStatement: StatementNode | Nothing = nothing;
  let statements = newArrayData<StatementNode>();
  let breakNode: Node | Nothing = nothing;
  let nodes = newArrayData<Node>();

  const handle = () => {
    if (nodes.isEmpty()) {
      return;
    }

    lastStatement = handleStatement(statements, lastStatement, nodes);
    nodes = newArrayData();
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

  statements = collapseStatements(statements);

  return {
    statements,
    breakNode,
  };
}

export type StatementParserFunction<T extends StatementNode = StatementNode> = (
  indent: Integer,
  nodes: ArrayData<Node>,
  parent?: StatementNode | Nothing,
) => T | Nothing;

function statementParsers(): ArrayData<StatementParserFunction> {
  return newArrayData([
    parseImportStatementNode,
    parseDeclarationStatementNode,
    parseIfStatementNode,
    parseElseStatementNode,
    parseReturnStatementNode,
    parseExpressionStatementNode,
  ]);
}

function handleStatement(
  statements: ArrayData<StatementNode>,
  lastStatement: StatementNode | Nothing,
  nodes: ArrayData<Node>,
): StatementNode {
  const parent = getParentStatementForIndent(lastStatement, nodes.first()!.range.start);
  const indent = (parent?.indent ?? -1) + 1;
  let statement: StatementNode | Nothing;

  statement =
    statementParsers().firstMap((parse) => parse(indent, nodes, parent)) ??
    newUnknownStatementNode(indent, nodes);

  if (parent) {
    parent.body ??= newArrayData();
    parent.body.addLastItem(statement);
    statement.parent = parent;
  } else {
    statements.addLastItem(statement);
  }

  return statement;
}

function getParentStatementForIndent(
  statement: StatementNode | Nothing,
  indentPosition: TextPosition,
): StatementNode | Nothing {
  if (!statement) {
    return nothing;
  }

  if (indentPosition.column > statement.range.start.column) {
    return statement;
  }

  return getParentStatementForIndent(statement.parent, indentPosition);
}
