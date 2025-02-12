import {
  $NlNode,
  AnalyzerContext,
  collapseInvokeNode,
  collapseMemberNode,
  Node2,
  nodeGenerator,
  parseElseStatementNode,
  parseExpressionStatementNode,
  parseIfStatementNode,
  StatementNode2,
  SyntaxNode2,
} from '#analyzer';
import {ArrayData, Boolean2, Integer, newArrayData, Nothing, nothing, TextPosition} from '#common';
import {is} from '#typing';

export type SyntaxCollapseFn = (nodes: ArrayData<Node2>, startIndex: Integer) => SyntaxCollapseResult;
export type SyntaxCollapseResult = {index: Integer; node: SyntaxNode2} | Nothing;


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
  nodes: ArrayData<Node2>,
) => T | Nothing;

function statementParsers(): ArrayData<StatementParserFunction> {
  return newArrayData([parseIfStatementNode, parseElseStatementNode]);
}

function handleStatement(lastStatement: StatementNode2 | Nothing, nodes: ArrayData<Node2>): StatementNode2 {
  const parentStatement = getParentStatementForIndent(lastStatement, nodes.first()!.range.start);
  const indent = (parentStatement?.indent ?? -1) + 1;
  let statement: StatementNode2 | Nothing;

  statement =
    statementParsers().firstMap((parse) => parse(indent, nodes)) ??
    parseExpressionStatementNode(indent, nodes);

  if (parentStatement) {
    parentStatement.body ??= newArrayData();
    parentStatement.body.addLastItem(statement);
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
