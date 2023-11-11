import { Integer } from '~/lib/core';
import { Node } from '~/parser/node/node';
import { StatementNode, statementNode } from '~/parser/node/statement/statement-node';
import { getSyntacticNodes } from '~/parser/util/get-syntactic-nodes';
import { getStatementIndent } from './get-statement-indent';

export interface IndentBody {
  indent: Integer | null;
  statements: StatementNode[];
}

export function putStatement(indentBody: IndentBody[], nodes: Node[]): void {
  // todo ignore if no nodes
  // if(nodes.length === 0){
  //   return
  // }

  const indent = getStatementIndent(nodes);
  const lastIndentBody = indentBody.lastOrNull();
  const syntacticNodes = getSyntacticNodes(null, nodes);
  const statement = statementNode(syntacticNodes);

  if (!lastIndentBody) {
    indentBody.push({ indent, statements: [statement] });

    return;
  }

  if (indent === null) {
    lastIndentBody.statements.push(statement);

    return;
  }

  if (lastIndentBody.indent !== null && indent > lastIndentBody.indent) {
    indentBody.push({ indent, statements: [statement] });

    const lastStatement = lastIndentBody.statements.last();
    lastStatement.children.push(statement);
    statement.parent = lastStatement;

    return;
  }

  const foundIndentBodyIndex = indentBody.findLastIndex((x) => x.indent === null || x.indent <= indent);

  if (foundIndentBodyIndex < 0) {
    throw new Error('Not implemented');
  }

  // remove between current and parent bodies cuz we switch to existing body and never return to previous
  const foundIndentBody = indentBody[foundIndentBodyIndex];
  indentBody.splice(foundIndentBodyIndex + 1);
  // foundIndentBody.indent = Math.min(foundIndentBody.indent ?? indent, indent);
  foundIndentBody.statements.push(statement);

  const lastStatementParent = foundIndentBody.statements.first().parent;

  if (lastStatementParent) {
    lastStatementParent.children.push(statement);
    statement.parent = lastStatementParent;
  }
}
