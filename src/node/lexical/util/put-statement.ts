import { Integer } from '~/lib/core';
import { HiddenLexicalNode, NonHiddenLexicalNode } from '~/node/lexical/lexical-node';
import { getSyntacticNodes } from '~/node/lexical/util/get-syntactic-nodes';
import { BodyNode, bodyNode } from '~/node/syntactic/body/body-node';
import { statementNode } from '~/node/syntactic/statement/statement-node';
import { getStatementIndent } from './get-statement-indent';

export function putStatement(
  indentBody: { indent: Integer | null; body: BodyNode }[],
  nodes: NonHiddenLexicalNode[],
  hidden: HiddenLexicalNode[],
): void {
  const indent = getStatementIndent(nodes);

  const syntacticNodes = getSyntacticNodes(nodes);
  const statement = statementNode(syntacticNodes);
  statement.hidden = hidden;

  // if first statement
  if (indentBody.length === 0) {
    indentBody.push({ indent, body: bodyNode(null, [statement]) });

    return;
  }

  const lastIndentBody = indentBody.last();

  // if no nodes
  if (indent === null) {
    lastIndentBody.body.statements.push(statement);

    return;
  }

  // new body
  if (lastIndentBody.indent !== null && indent > lastIndentBody.indent) {
    const lastStatement = lastIndentBody.body.statements.last();
    const body = bodyNode(lastStatement, [statement]);
    indentBody.push({ indent, body });

    lastStatement.body = body;

    return;
  }

  // if should be added to existing body
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
