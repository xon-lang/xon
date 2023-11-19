import { Integer } from '~/lib/core';
import { Node } from '~/parser/node/node';
import { NodeType } from '~/parser/node/node-type';
import { RootNode } from '~/parser/node/root/root-node';
import { getSyntacticNode } from '~/parser/util/get-syntactic-node';
import { is } from '~/parser/util/is';
import { ParserContext } from '../parser-context';

export function putStatementNode(context: ParserContext): Node | null {
  if (context.lastStatementNodes.length === 0) {
    return null;
  }

  const indent = context.lastStatementNodes[0].range.start.column;

  if (!context.lastStatementNode) {
    const statement = getSyntacticNode(context, context.root);
    context.lastStatementNodes.push(statement);

    return statement;
  }

  if (indent > context.lastStatementNode.range.start.column) {
    return getSyntacticNode(context, context.lastStatementNode);
  }

  const parent = findParentWithLessIndent(context.lastStatementNode, indent);
  const statement = getSyntacticNode(context, parent);

  if (!parent) {
    context.lastStatementNodes.push(statement);
  }

  return statement;
}

function findParentWithLessIndent(lastStatementNode: Node, indent: Integer): Node | null {
  if (is<RootNode>(lastStatementNode.parent, NodeType.ROOT)) {
    return lastStatementNode.parent;
  }

  if (!lastStatementNode.parent) {
    return null;
  }

  if (lastStatementNode.parent.range.start.column < indent) {
    return lastStatementNode.parent!;
  }

  return findParentWithLessIndent(lastStatementNode.parent!, indent);
}
