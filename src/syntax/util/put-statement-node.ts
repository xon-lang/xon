import { Integer } from '../../lib/core';
import { $Node, StatementNode } from '../node/node';
import { RootNode } from '../node/root/root-node';
import { SyntaxContext } from '../syntax-context';
import { getStatementNode } from './get-syntactic-node';
import { is } from './is';

export function putStatementNode(context: SyntaxContext): void {
  context.parentStatement = getParent(context);
  const statement = getStatementNode(context);
  statement.parent = context.parentStatement;

  if (context.parentStatement === context.root) {
    context.root.children.push(statement);
  }

  context.previousStatement = statement;
}

function getParent(context: SyntaxContext): StatementNode {
  const { nodes, previousStatement, root } = context;
  const indent = nodes[0].range.start.column;

  if (!previousStatement) {
    return root;
  }

  if (indent > previousStatement.range.start.column) {
    return previousStatement;
  }

  return findParentStatementWithLessIndent(previousStatement, indent);
}

function findParentStatementWithLessIndent(node: StatementNode, indent: Integer): StatementNode {
  if (!node.parent) {
    throw new Error('Not implemented');
  }

  if (is<RootNode>(node.parent, $Node.ROOT)) {
    return node.parent;
  }

  if (node.parent.range.start.column < indent) {
    return node.parent!;
  }

  return findParentStatementWithLessIndent(node.parent!, indent);
}
