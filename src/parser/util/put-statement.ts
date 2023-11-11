import { Integer } from '~/lib/core';
import { BodyNode, bodyNode } from '~/parser/node/body/body-node';
import { Node } from '~/parser/node/node';
import { statementNode } from '~/parser/node/statement/statement-node';
import { getSyntacticNodes } from '~/parser/util/get-syntactic-nodes';
import { getStatementIndent } from './get-statement-indent';

export interface IndentBody {
  indent: Integer | null;
  body: BodyNode;
}

export function putStatement(indentBody: IndentBody[], nodes: Node[]): void {
  const indent = getStatementIndent(nodes);
  const lastIndentBody = indentBody.lastOrNull();
  const syntacticNodes = getSyntacticNodes(null, nodes);
  const statement = statementNode(syntacticNodes, null);

  if (!lastIndentBody) {
    indentBody.push({ indent, body: bodyNode([statement]) });

    return;
  }

  if (indent === null) {
    lastIndentBody.body.statements.push(statement);

    return;
  }

  if (lastIndentBody.indent !== null && indent > lastIndentBody.indent) {
    const lastStatement = lastIndentBody.body.statements.last();
    const body = bodyNode([statement]);
    indentBody.push({ indent, body });

    lastStatement.body = body;

    return;
  }

  const foundIndentBodyIndex = indentBody.findLastIndex((x) => x.indent === null || x.indent <= indent);

  if (foundIndentBodyIndex < 0) {
    throw new Error('Not implemented');
  }

  // remove between current and parent bodies cuz we switch to existing body and never return to previous
  const foundIndentBody = indentBody[foundIndentBodyIndex];
  indentBody.splice(foundIndentBodyIndex + 1);
  foundIndentBody.indent = Math.min(foundIndentBody.indent ?? indent, indent);
  foundIndentBody.body.statements.push(statement);
}
