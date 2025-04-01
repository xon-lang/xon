import {ConditionStatementNode, ElseStatementNode, IfStatementNode} from '#analyzer';
import {newText, Text} from '#common';
import {translateTypescriptStatement, translateTypescriptValue} from '#translator';

export function translateTypescriptConditionStatement(node: ConditionStatementNode): Text {
  if (node.elseStatement) {
    const ifTranslated = translateIfStatement(node.ifStatement);
    const elseTranslated = translateElseStatement(node.elseStatement);

    return newText(`${ifTranslated} ${elseTranslated}\n`);
  }

  const ifTranslated = translateIfStatement(node.ifStatement);

  return newText(`${ifTranslated}\n`);
}

function translateIfStatement(node: IfStatementNode): Text {
  if (node.expression && node.body) {
    const expression = translateTypescriptValue(node.expression);

    const body = newText(
      node.body.children.map((x) => translateTypescriptStatement(x)),
      newText('\n'),
    ).margin(2);

    return newText(`if (${expression}) {\n${body}\n}`);
  }

  return newText(`/* error condition */`);
}

function translateElseStatement(node: ElseStatementNode): Text {
  if (node.body) {
    const body = newText(
      node.body.children.map((x) => translateTypescriptStatement(x)),
      newText('\n'),
    ).margin(2);

    return newText(`else {\n${body}\n}`);
  }

  return newText(`/* error condition */`);
}
