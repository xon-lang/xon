import { Integer } from '~/lib/core';
import { Node } from '~/parser/node/node';
import { StatementNode } from '~/parser/node/statement/statement-node';
import { getSyntacticStatement } from '~/parser/util/get-syntactic-statement';

export function putStatement(
  statements: StatementNode[],
  lastStatement: StatementNode | null,
  nodes: Node[],
): StatementNode | null {
  if (nodes.length === 0) {
    return null;
  }

  const indent = nodes[0].start.column;

  if (!lastStatement) {
    const statement = getSyntacticStatement(nodes, null);
    statements.push(statement);

    return statement;
  }

  if (indent > lastStatement.indent) {
    return getSyntacticStatement(nodes, lastStatement);
  }

  const parent = findParentWithLessIndent(lastStatement, indent);
  const statement = getSyntacticStatement(nodes, parent);

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
