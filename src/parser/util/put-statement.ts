import { Integer } from '~/lib/core';
import { Node } from '~/parser/node/node';
import { StatementNode, statementNode } from '~/parser/node/statement/statement-node';
import { getSyntacticNodes } from '~/parser/util/get-syntactic-nodes';

export function putStatement(
  statements: StatementNode[],
  lastStatement: StatementNode | null,
  nodes: Node[],
): StatementNode | null {
  if (nodes.length === 0) {
    return null;
  }

  const indent = nodes[0].start.column;
  const syntacticNodes = getSyntacticNodes(null, nodes);

  if (!lastStatement) {
    const statement = statementNode(syntacticNodes, null);
    statements.push(statement);

    return statement;
  }

  if (indent > lastStatement.indent) {
    return statementNode(syntacticNodes, lastStatement);
  }

  const parent = findParentWithLessIndent(lastStatement, indent);
  const statement = statementNode(syntacticNodes, parent);

  if (!parent) {
    statements.push(statement);
  }

  return statement;
}

function findParentWithLessIndent(lastStatement: StatementNode, indent: Integer): StatementNode | null {
  if (!lastStatement.parent) {
    return null;
  }

  if (lastStatement.parent?.indent < indent) {
    return lastStatement.parent;
  }

  return findParentWithLessIndent(lastStatement.parent, indent);
}
