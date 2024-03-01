import {formatNode, formatNodes, Formatter, FormattingType} from '../../formatter/formatter';
import {Integer, Nothing, nothing} from '../../lib/core';
import {rangeFromPosition} from '../../source/source-range';
import {StatementNode} from '../node/syntax/statement/statement-node';
import {SyntaxContext} from '../syntax-context';
import {getStatementNode} from './get-syntactic-node';

export function putStatementNode(context: SyntaxContext): void {
  const parent = getParent(context);
  context.parentStatement = parent;

  const statement = getStatementNode(context, parent);
  statement.hiddenNodes = context.hiddenNodes;

  formatStatement(context, statement);

  context.hiddenNodes = [];
  context.previousStatement = statement;
}

function getParent(context: SyntaxContext): StatementNode | Nothing {
  const {nodes, previousStatement} = context;

  if (!previousStatement) {
    return nothing;
  }

  const indent = nodes[0].range.start.column;

  if (indent > previousStatement.range.start.column) {
    return previousStatement;
  }

  return findParentStatementWithLessIndent(previousStatement, indent);
}

function findParentStatementWithLessIndent(node: StatementNode, indent: Integer): StatementNode | Nothing {
  if (!node.parent) {
    return nothing;
  }

  if (node.parent.range.start.column < indent) {
    return node.parent!;
  }

  return findParentStatementWithLessIndent(node.parent, indent);
}

function formatStatement(context: SyntaxContext, statement: StatementNode) {
  formatNode(context, statement, false, FormattingType.BEFORE);
  formatNodes(context, statement.children);

  const formatter: Formatter = {
    text: '  '.repeat(statement.indentLevel),
    range: rangeFromPosition(statement.range.start),
  };

  context.formatters.push(formatter);
}
