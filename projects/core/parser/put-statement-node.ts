import {formatStatement} from '../formatter/formatter';
import {Integer, Nothing, nothing} from '../lib/core';
import {StatementNode, constructStatementNode} from './node/statement/statement-node';
import {SyntaxContext} from './syntax-context';

export function putStatementNode(context: SyntaxContext, indentColumn: Integer): Nothing {
  const parentStatement = getParent(context, indentColumn);
  context.parentStatement = parentStatement;

  const statement = constructStatementNode(context, parentStatement, indentColumn);
  context.previousStatement = statement;
}

function getParent(context: SyntaxContext, indent: Integer): StatementNode | Nothing {
  if (!context.previousStatement) {
    return nothing;
  }

  if (indent > context.previousStatement.indentColumn) {
    return context.previousStatement;
  }

  return findParentStatementWithLessIndent(context.previousStatement, indent);
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
