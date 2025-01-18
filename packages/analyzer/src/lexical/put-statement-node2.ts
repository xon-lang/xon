import {newStatementNode, Node2, StatementNode2} from '#analyzer';
import {ArrayData, newArrayData, Nothing, nothing, TextPosition} from '#common';

export function putStatementNode2(
  nodes: ArrayData<Node2>,
  lastStatement: StatementNode2 | Nothing,
): StatementNode2 {
  const firstNode = nodes.first()!;
  const parentStatement = getParentStatement(lastStatement, firstNode.range.start);
  // const isFirstStatement = statements.isEmpty();
  const statement = newStatementNode(parentStatement, firstNode, nodes.slice(1));

  if (parentStatement) {
    parentStatement.body ??= newArrayData();
    parentStatement.body.addLastItem(statement);
  }

  return statement;
}

function getParentStatement(
  lastStatement: StatementNode2 | Nothing,
  indentPosition: TextPosition,
): StatementNode2 | Nothing {
  if (!lastStatement) {
    return nothing;
  }

  if (indentPosition.column > lastStatement.value.range.start.column) {
    return lastStatement;
  }

  return findParentStatementWithLessIndent(lastStatement, indentPosition);
}

function findParentStatementWithLessIndent(
  statement: StatementNode2,
  indentPosition: TextPosition,
): StatementNode2 | Nothing {
  if (!statement.parent) {
    return nothing;
  }

  if (statement.parent.value.range.start.column < indentPosition.column) {
    return statement.parent;
  }

  return findParentStatementWithLessIndent(statement.parent, indentPosition);
}
