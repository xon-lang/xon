import {formatStatement} from '../formatter/formatter';
import {Integer, Nothing, nothing} from '../lib/core';
import {StatementNode, constructStatementNode} from './node/statement/statement-node';
import {SyntaxContext} from './syntax-context';

export function putStatementNode(context: SyntaxContext, indentColumn: Integer): Nothing {
  const parentStatement = getParent(context, indentColumn);
  context.parentStatement = parentStatement;

  const statement = constructStatementNode(context, parentStatement, indentColumn);

  statement.hiddenNodes = context.hiddenNodesBuffer;

  if (parentStatement) {
    parentStatement.body.push(statement);
  } else {
    context.statements.push(statement);
  }

  formatStatement(context, statement);

  context.hiddenNodesBuffer = [];
  context.previousStatement = statement;
}

function getParent(context: SyntaxContext, indent: Integer): StatementNode | Nothing {
  const {previousStatement} = context;

  if (!previousStatement) {
    return nothing;
  }

  if (indent > previousStatement.indentColumn) {
    return previousStatement;
  }

  return findParentStatementWithLessIndent(previousStatement, indent);
}

function findParentStatementWithLessIndent(node: StatementNode, indent: Integer): StatementNode | Nothing {
  if (!node.parentStatement) {
    return nothing;
  }

  if (node.parentStatement.indentColumn < indent) {
    return node.parentStatement;
  }

  return findParentStatementWithLessIndent(node.parentStatement, indent);
}
