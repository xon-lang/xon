import {constructStatementNode, Node, StatementNode, SyntaxAnalyzer} from '#analyzer';
import {ArrayData, Nothing, nothing, TextRange} from '#common';

export function putStatementNode(
  analyzer: SyntaxAnalyzer,
  nodes: ArrayData<Node>,
  statements: ArrayData<StatementNode>,
  lastStatement: StatementNode | Nothing,
  indent: TextRange,
): StatementNode {
  const parentStatement = getParentStatement(lastStatement, indent);
  const isFirstStatement = statements.isEmpty();
  const statement = constructStatementNode(analyzer, parentStatement, nodes, indent, isFirstStatement);

  if (parentStatement) {
    parentStatement.body.addLastItem(statement);
  } else {
    statements.addLastItem(statement);
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
