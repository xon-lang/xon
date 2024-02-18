import { Integer, Nothing, nothing } from '../../lib/core';
import { StatementNode } from '../node/statement/statement-node';
import { SyntaxContext } from '../syntax-context';
import { getStatementNode } from './get-syntactic-node';

export function putStatementNode(context: SyntaxContext): void {
  const parent = getParent(context);
  context.parentStatement = parent;

  const statement = getStatementNode(context, parent);
  context.previousStatement = statement;
}

function getParent(context: SyntaxContext): StatementNode | Nothing {
  const { nodes, previousStatement } = context;

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
