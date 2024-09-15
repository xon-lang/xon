import {Nothing, nothing} from '#common';
import {Node, StatementNode, SyntaxAnalyzer, TextRange, constructStatementNode} from '#core';

export function putStatementNode(
  analyzer: SyntaxAnalyzer,
  nodes: Node[],
  statements: StatementNode[],
  lastStatement: StatementNode | Nothing,
  indent: TextRange,
): StatementNode {
  const parentStatement = getParentStatement(lastStatement, indent);
  const isFirstStatement = statements.length === 0;
  const statement = constructStatementNode(analyzer, parentStatement, nodes, indent, isFirstStatement);

  if (parentStatement) {
    parentStatement.body.push(statement);
  } else {
    statements.push(statement);
  }

  return statement;
}

function getParentStatement(
  lastStatement: StatementNode | Nothing,
  indent: TextRange,
): StatementNode | Nothing {
  if (!lastStatement) {
    return nothing;
  }

  if (indent.stop.column > lastStatement.indent.stop.column) {
    return lastStatement;
  }

  return findParentStatementWithLessIndent(lastStatement, indent);
}

function findParentStatementWithLessIndent(
  statement: StatementNode,
  indent: TextRange,
): StatementNode | Nothing {
  if (!statement.parent) {
    return nothing;
  }

  if (statement.parent.indent.stop.column < indent.stop.column) {
    return statement.parent;
  }

  return findParentStatementWithLessIndent(statement.parent, indent);
}
