import {ReturnStatementNode} from '#analyzer';
import {newText, Text} from '#core';
import {translateTypescriptExpression} from '#translator';

export function translateTypescriptReturnStatement(node: ReturnStatementNode): Text {
  if (node.expression) {
    const expression = translateTypescriptExpression(node.expression, false);

    return newText(`return ${expression}`);
  }

  return newText(`return`);
}
