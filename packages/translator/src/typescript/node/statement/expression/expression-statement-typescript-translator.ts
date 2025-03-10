import {ExpressionStatementNode} from '#analyzer';
import {newText, Text} from '#common';
import {translateTypescriptValue} from '#translator';

export function translateTypescriptExpressionStatement(node: ExpressionStatementNode): Text {
  const expression = translateTypescriptValue(node.expression);

  return newText(`${expression};`);
}
