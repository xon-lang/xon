import {Integer, Nothing, nothing} from '../lib/core';
import {StatementNode, constructStatementNode} from './node/statement/statement-node';
import {SyntaxContext} from './syntax-context';

export function putStatementNode(context: SyntaxContext, indentColumn: Integer): Nothing {
  context.parentStatement = getParent(context, indentColumn);
  context.lastStatement = constructStatementNode(context, indentColumn);
}

function getParent(context: SyntaxContext, indent: Integer): StatementNode | Nothing {
  if (!context.lastStatement) {
    return nothing;
  }

  if (indent > context.lastStatement.indentColumn) {
    return context.lastStatement;
  }

  return findParentStatementWithLessIndent(context.lastStatement, indent);
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
