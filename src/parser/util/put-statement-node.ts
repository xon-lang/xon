import { Integer } from '~/lib/core';
import { Node, addNodeChildren } from '~/parser/node/node';
import { NodeType } from '~/parser/node/node-type';
import { RootNode } from '~/parser/node/root/root-node';
import { getSyntacticNode } from '~/parser/util/get-syntactic-node';
import { is } from '~/parser/util/is';
import { ParserContext } from '../parser-context';

export function putStatementNode(context: ParserContext): Node | null {
  const { nodes: lastStatementNodes, lastStatement, root } = context;

  const indent = lastStatementNodes[0].range.start.column;

  if (!lastStatement) {
    context.parent = root;
    const statement = getSyntacticNode(context);
    addNodeChildren(root, statement);

    return statement;
  }

  if (indent > lastStatement.range.start.column) {
    context.parent = lastStatement;
    const statement = getSyntacticNode(context);
    addNodeChildren(lastStatement, statement);

    return statement;
  }

  const parent = findParentWithLessIndent(lastStatement, indent);
  context.parent = parent;
  const statement = getSyntacticNode(context);

  if (parent) {
    addNodeChildren(parent, statement);
  }

  return statement;
}

function findParentWithLessIndent(node: Node, indent: Integer): Node {
  if (!node.parent) {
    throw new Error('Not implemented');
  }

  if (is<RootNode>(node.parent, NodeType.ROOT)) {
    return node.parent;
  }

  if (node.parent.range.start.column < indent) {
    return node.parent!;
  }

  return findParentWithLessIndent(node.parent!, indent);
}
