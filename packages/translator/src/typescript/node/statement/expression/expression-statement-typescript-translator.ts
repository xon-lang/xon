import {ExpressionStatementNode} from '#analyzer';
import {newText, Text} from '#core';
import {translateTypescriptExpression} from '#translator';

export function translateTypescriptExpressionStatement(node: ExpressionStatementNode): Text {
  const expression = translateTypescriptExpression(node.expression, false);

  return newText(`${expression}`);
}
