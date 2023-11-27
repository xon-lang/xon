import { Integer } from '~/lib/core';
import { Node, addNodeChildren } from '~/parser/node/node';
import { NodeType } from '~/parser/node/node-type';
import { RootNode } from '~/parser/node/root/root-node';
import { getSyntacticNode } from '~/parser/util/get-syntactic-node';
import { is } from '~/parser/util/is';
import { ParserContext } from '../parser-context';

export function putStatementNode(context: ParserContext): Node | null {
  const { lastStatementNodes, lastStatement, root } = context;

  const indent = lastStatementNodes[0].range.start.column;

  if (!lastStatement) {
    const statement = getSyntacticNode(context, root);
    addNodeChildren(root, statement);

    return statement;
  }

  if (indent > lastStatement.range.start.column) {
    const statement = getSyntacticNode(context, lastStatement);
    addNodeChildren(lastStatement, statement);

    return statement;
  }

  const parent = findParentWithLessIndent(lastStatement, indent);
  const statement = getSyntacticNode(context, parent);

  if (parent) {
    addNodeChildren(parent, statement);
  }

  return statement;
}

function findParentWithLessIndent(node: Node, indent: Integer): Node | null {
  if (is<RootNode>(node.parent, NodeType.ROOT)) {
    return node.parent;
  }

  if (!node.parent) {
    return null;
  }

  if (node.parent.range.start.column < indent) {
    return node.parent!;
  }

  return findParentWithLessIndent(node.parent!, indent);
}
