import { Integer } from '../../lib/core';
import { StatementNode } from '../../parser/node/node';
import { RootNode } from '../../parser/node/root/root-node';
import { getStatementNode } from '../../parser/util/get-syntactic-node';
import { is } from '../../parser/util/is';
import { $Node } from '../node/node';
import { ParserContext } from '../parser-context';

export function putStatementNode(context: ParserContext): void {
  context.parentStatement = getParent(context);
  const statement = getStatementNode(context);
  statement.parent = context.parentStatement;

  // todo remove it. temp hack
  statement.modelDeclarationType = context.modelDeclarationType;
  context.modelDeclarationType = null;

  if (context.parentStatement === context.root) {
    context.root.children.push(statement);
  }

  context.previousStatement = statement;
}

function getParent(context: ParserContext): StatementNode {
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
