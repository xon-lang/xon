import {
  $NlNode,
  AnalyzerContext,
  collapseStatements,
  Node,
  nodeGenerator,
  parseElseStatementNode,
  parseExpressionStatementNode,
  parseIfStatementNode,
  StatementNode2,
} from '#analyzer';
import {ArrayData, Boolean2, Integer, newArrayData, Nothing, nothing, TextPosition} from '#common';
import {is} from '#typing';

export function parseStatements(
  context: AnalyzerContext,
  predicate?: ((node: Node) => Boolean2) | Nothing,
): {
  statements: ArrayData<StatementNode2>;
  breakNode?: Node | Nothing;
} {
  let lastStatement: StatementNode2 | Nothing = nothing;
  let statements = newArrayData<StatementNode2>();
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
      if (is(node, $NlNode)) {
        handle();
      }

      continue;
    }

    nodes.addLastItem(node);
  }

  handle();

  statements = collapseAllStatement(statements);

  return {
    statements,
    breakNode,
  };
}

function collapseAllStatement(statements: ArrayData<StatementNode2>): ArrayData<StatementNode2> {
  for (const statement of statements) {
    if (statement.body) {
      collapseAllStatement(statement.body);
    }
  }

  return collapseStatements(statements);
}

export type StatementParserFunction<T extends StatementNode2 = StatementNode2> = (
  indent: Integer,
  nodes: ArrayData<Node>,
) => T | Nothing;

function statementParsers(): ArrayData<StatementParserFunction> {
  return newArrayData([parseIfStatementNode, parseElseStatementNode]);
}

function handleStatement(
  statements: ArrayData<StatementNode2>,
  lastStatement: StatementNode2 | Nothing,
  nodes: ArrayData<Node>,
): StatementNode2 {
  const parent = getParentStatementForIndent(lastStatement, nodes.first()!.range.start);
  const indent = (parent?.indent ?? -1) + 1;
  let statement: StatementNode2 | Nothing;

  statement =
    statementParsers().firstMap((parse) => parse(indent, nodes)) ??
    parseExpressionStatementNode(indent, nodes);

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
  statement: StatementNode2 | Nothing,
  indentPosition: TextPosition,
): StatementNode2 | Nothing {
  if (!statement) {
    return nothing;
  }

  if (indentPosition.column > statement.range.start.column) {
    return statement;
  }

  return getParentStatementForIndent(statement.parent, indentPosition);
}
