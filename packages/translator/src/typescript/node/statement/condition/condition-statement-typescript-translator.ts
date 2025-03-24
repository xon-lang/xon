import {ConditionStatementNode} from '#analyzer';
import {newText, Text} from '#common';
import {translateTypescriptStatement, translateTypescriptValue} from '#translator';

export function translateTypescriptConditionStatement(node: ConditionStatementNode): Text {
  if (node.ifStatement.expression && node.ifStatement.body) {
    const body = newText(
      node.ifStatement.body.map((x) => translateTypescriptStatement(x)),
      newText('\n'),
    ).margin(2);

    const expression = translateTypescriptValue(node.ifStatement.expression);

    return newText(`if (${expression}) {\n${body}\n}`);
  }

  return newText(`/* error condition */`);
}
