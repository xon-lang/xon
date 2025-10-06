import {ReturnStatementNode} from '#analyzer';
import {newText, Text} from '#common';
import {translateTypescriptExpression} from '#translator';

export function translateTypescriptReturnStatement(node: ReturnStatementNode): Text {
  if (node.expression) {
    const expression = translateTypescriptExpression(node.expression);

    return newText(`return ${expression}`);
  }

  return newText(`return`);
}
