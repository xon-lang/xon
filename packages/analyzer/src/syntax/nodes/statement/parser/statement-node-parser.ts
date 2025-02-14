import {
  $NlNode,
  AnalyzerContext,
  collapseStatements,
  Node,
  nodeGenerator,
  parseElseStatementNode,
  parseExpressionStatementNode,
  parseIfStatementNode,
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

function collapseAllStatement(statements: ArrayData<StatementNode>): ArrayData<StatementNode> {
  for (const statement of statements) {
    if (statement.body) {
      collapseAllStatement(statement.body);
    }
  }

  return collapseStatements(statements);
}

export type StatementParserFunction<T extends StatementNode = StatementNode> = (
  indent: Integer,
  nodes: ArrayData<Node>,
) => T | Nothing;

function statementParsers(): ArrayData<StatementParserFunction> {
  return newArrayData([parseIfStatementNode, parseElseStatementNode]);
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
