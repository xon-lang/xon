import {ReturnStatementNode} from '#analyzer';
import {newText, Text} from '#common';
import {translateTypescriptValue} from '#translator';

export function translateTypescriptReturnStatement(node: ReturnStatementNode): Text {
  if (node.expression) {
    const expression = translateTypescriptValue(node.expression);

    return newText(`return ${expression};`);
  }

  return newText(`return;`);
}
