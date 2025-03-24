import {
  $DeclarationStatementNode,
  $ExpressionStatementNode,
  $IdNode,
  DeclarationStatementNode,
  StatementNode,
  TYPE,
} from '#analyzer';
import {ArrayData, Boolean2, newArrayData, newText, Text} from '#common';
import {translateTypescriptType, translateTypescriptValue} from '#translator';
import {is} from '#typing';

export function translateTypescriptDeclarationStatement(node: StatementNode): Text {
  if (!is(node, $DeclarationStatementNode())) {
    return newText(`/* error type declaration */`);
  }

  if (node.keyword?.text.equals(TYPE)) {
    return translateTypeDeclaration(node);
  }

  return translateValueDeclaration(node, false);
}

function translateTypeDeclaration(node: DeclarationStatementNode): Text {
  if (node.assignment?.expression) {
    const assignment = translateTypescriptValue(node.assignment.expression);

    return newText(`type ${node.id.text} = ${assignment}`);
  }

  const body = translateAttributes(node.body ?? newArrayData());

  return newText(`type ${node.id.text} = ${body}`);
}

function translateAttributes(body: ArrayData<StatementNode>): Text {
  const translatedBody = newText(
    body.map((x) => translateValueDeclaration(x, true)),
    newText('\n'),
  );

  return newText(`{\n${translatedBody.margin(2)}\n}\n`);
}

function translateValueDeclaration(node: StatementNode, isAttribute: Boolean2): Text {
  if (isAttribute && is(node, $ExpressionStatementNode()) && is(node.expression, $IdNode())) {
    return newText(`${node.expression.text}`);
  }

  if (!is(node, $DeclarationStatementNode()) || !node.id) {
    return newText(`/* error value declaration */`);
  }

  if (is(node.id, $IdNode())) {
    const keyword = node.keyword
      ? newText(`${node.keyword?.text} `)
      : isAttribute
      ? newText()
      : newText('let ');

    let type = newText();

    if (node.annotation?.expression) {
      type = newText(`: ${translateTypescriptType(node.annotation.expression)}`);
    }

    let value = newText();

    if (node.assignment?.expression) {
      value = newText(` = ${translateTypescriptType(node.assignment.expression)}`);
    }

    return newText(`${keyword}${node.id.text}${type}${value}`);
  }

  return newText(`/* error value declaration */`);
}
