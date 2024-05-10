import {formatStatement} from '../formatter/formatter';
import {Integer, Nothing, nothing} from '../lib/core';
import {$Node, is} from './node/node';
import {StatementNode, constructStatementNode} from './node/statement/statement-node';
import {WhitespaceNode} from './node/token/whitespace/whitespace-node';
import {SyntaxContext} from './syntax-context';

// todo try to simplify it
export function putStatementNode(context: SyntaxContext): Nothing {
  const {hiddenNodes} = context;
  const lastNlIndex = hiddenNodes.findLastIndex((x) => is(x, $Node.NL));

  const beforeIndentHiddenNodes = hiddenNodes.slice(0, lastNlIndex + 1);
  const indentHiddenNodes = hiddenNodes.slice(beforeIndentHiddenNodes.length);

  const firstIndentHiddenNode = indentHiddenNodes.first();
  const isFirstHiddenWhitespace = is<WhitespaceNode>(firstIndentHiddenNode, $Node.WHITESPACE);
  const indentStopColumn = isFirstHiddenWhitespace ? firstIndentHiddenNode.range.stop.column : 0;

  const parentStatement = getParent(context, indentStopColumn);
  context.parentStatement = parentStatement;

  const statement = constructStatementNode(
    context,
    parentStatement,
    indentStopColumn,
    beforeIndentHiddenNodes,
    indentHiddenNodes,
  );

  statement.hiddenNodes = context.hiddenNodes;

  if (parentStatement) {
    parentStatement.body.push(statement);
  } else {
    context.statements.push(statement);
  }

  formatStatement(context, statement);

  context.hiddenNodes = [];
  context.previousStatement = statement;
}

function getParent(context: SyntaxContext, indentStopColumn: Integer): StatementNode | Nothing {
  const {previousStatement} = context;

  if (!previousStatement) {
    return nothing;
  }

  if (indentStopColumn > previousStatement.indentStopColumn) {
    return previousStatement;
  }

  return findParentStatementWithLessIndent(previousStatement, indentStopColumn);
}

function findParentStatementWithLessIndent(node: StatementNode, indentStopColumn: Integer): StatementNode | Nothing {
  if (!node.parentStatement) {
    return nothing;
  }

  if (node.parentStatement.indentStopColumn < indentStopColumn) {
    return node.parentStatement;
  }

  return findParentStatementWithLessIndent(node.parentStatement, indentStopColumn);
}
