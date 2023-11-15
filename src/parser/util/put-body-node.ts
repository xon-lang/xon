import { Integer } from '~/lib/core';
import { Node } from '~/parser/node/node';
import { Parser } from '~/parser/parser';
import { getSyntacticNode } from '~/parser/util/get-syntactic-node';

export function putBodyNode(parser: Parser, bodyNodes: Node[], lastBodyNode: Node | null, nodes: Node[]): Node | null {
  if (nodes.length === 0) {
    return null;
  }

  const indent = nodes[0].start.column;

  if (!lastBodyNode) {
    const statement = getSyntacticNode(parser, nodes, null);
    bodyNodes.push(statement);

    return statement;
  }

  if (indent > lastBodyNode.start.column) {
    return getSyntacticNode(parser, nodes, lastBodyNode);
  }

  const parent = findParentWithLessIndent(lastBodyNode, indent);
  const statement = getSyntacticNode(parser, nodes, parent);

  if (!parent) {
    bodyNodes.push(statement);
  }

  return statement;
}

function findParentWithLessIndent(lastBodyNode: Node, indent: Integer): Node | null {
  if (!lastBodyNode.parent) {
    return null;
  }

  if (lastBodyNode.parent?.start.column < indent) {
    return lastBodyNode.parent;
  }

  return findParentWithLessIndent(lastBodyNode.parent, indent);
}
