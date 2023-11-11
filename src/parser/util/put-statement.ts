import { Integer } from '~/lib/core';
import { Node } from '~/parser/node/node';
import { StatementNode, statementNode } from '~/parser/node/statement/statement-node';
import { getSyntacticNodes } from '~/parser/util/get-syntactic-nodes';

export interface IndentBody {
  indent: Integer;
  statements: StatementNode[];
}

export function putStatement(indentBody: IndentBody[], nodes: Node[]): void {
  if (nodes.length === 0) {
    return;
  }

  const indent = nodes[0].start.column;
  const lastIndentBody = indentBody.lastOrNull();
  const syntacticNodes = getSyntacticNodes(null, nodes);
  const statement = statementNode(syntacticNodes);

  if (!lastIndentBody) {
    indentBody.push({ indent, statements: [statement] });

    return;
  }

  if (indent > lastIndentBody.indent) {
    indentBody.push({ indent, statements: [statement] });

    const lastStatement = lastIndentBody.statements.last();
    lastStatement.children.push(statement);
    statement.parent = lastStatement;

    return;
  }

  const foundIndentBodyIndex = indentBody.findLastIndex((x) => x.indent <= indent);

  const foundIndentBody = indentBody[foundIndentBodyIndex];
  indentBody.splice(foundIndentBodyIndex + 1);
  foundIndentBody.statements.push(statement);

  const lastStatementParent = foundIndentBody.statements.first().parent;

  if (lastStatementParent) {
    lastStatementParent.children.push(statement);
    statement.parent = lastStatementParent;
  }
}
