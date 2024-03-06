import {formatStatement} from '../../formatter/formatter';
import {Integer, Nothing, nothing} from '../../lib/core';
import {$Node, is} from '../node/node';
import {StatementNode} from '../node/syntax/statement/statement-node';
import {WhitespaceNode} from '../node/token/whitespace/whitespace-node';
import {SyntaxContext} from '../syntax-context';
import {getStatementNode} from './get-statement-node';

export function putStatementNode(context: SyntaxContext): void {
  const {hiddenNodes} = context;
  const lastNlIndex = hiddenNodes.findLastIndex((x) => is(x, $Node.NL));
  const beforeIndentHiddenNodes = hiddenNodes.slice(0, lastNlIndex + 1);
  const indentHiddenNodes = hiddenNodes.slice(beforeIndentHiddenNodes.length);
  const firstIndentHiddenNode = indentHiddenNodes.firstOrNull();
  const isFirstHiddenWhitespace = is<WhitespaceNode>(firstIndentHiddenNode, $Node.WHITESPACE);
  const indentStopColumn = isFirstHiddenWhitespace ? firstIndentHiddenNode.range.stop.column : 0;

  const parent = getParent(context, indentStopColumn);
  context.parentStatement = parent;

  const statement = getStatementNode(context, parent, indentStopColumn, beforeIndentHiddenNodes, indentHiddenNodes);
  statement.hiddenNodes = context.hiddenNodes;

  formatStatement(context, statement);

  context.hiddenNodes = [];
  context.previousStatement = statement;
}

function getParent(context: SyntaxContext, indentStopColumn: Integer): StatementNode | Nothing {
  const {nodes, previousStatement} = context;

  if (!previousStatement) {
    return nothing;
  }

  if (indentStopColumn > previousStatement.indentStopColumn) {
    return previousStatement;
  }

  return findParentStatementWithLessIndent(previousStatement, indentStopColumn);
}

function findParentStatementWithLessIndent(node: StatementNode, indentStopColumn: Integer): StatementNode | Nothing {
  if (!node.parent) {
    return nothing;
  }

  if (node.parent.indentStopColumn < indentStopColumn) {
    return node.parent!;
  }

  return findParentStatementWithLessIndent(node.parent, indentStopColumn);
}
