import {
  $DeclarationStatementNode,
  $ExpressionStatementNode,
  $IdNode,
  DeclarationStatementNode,
  StatementNode,
} from '#analyzer';
import {newText, Text} from '#common';
import {
  translateTypescriptBody,
  translateTypescriptType,
  translateTypescriptValue,
  TypescriptDeclarationType,
} from '#translator';
import {is} from '#typing';

export function translateTypescriptValueDeclaration(
  node: StatementNode,
  declarationType: TypescriptDeclarationType,
): Text {
  if (
    (declarationType === TypescriptDeclarationType.Attribute ||
      declarationType === TypescriptDeclarationType.Parameter) &&
    is(node, $ExpressionStatementNode()) &&
    is(node.expression, $IdNode())
  ) {
    return newText(`${node.expression.text}`);
  }

  if (!is(node, $DeclarationStatementNode()) || !node.id) {
    return newText(`/* error value declaration */`);
  }

  if (node.parameters) {
    return translateToFunction(node, declarationType);
  }

  const keyword = node.keyword
    ? newText(`${node.keyword?.text} `)
    : declarationType === TypescriptDeclarationType.Variable
    ? newText('export const ')
    : newText();

  let type = newText();

  if (node.annotation?.expression) {
    type = newText(`: ${translateTypescriptType(node.annotation.expression)}`);
  }

  let value = newText();

  if (node.assignment?.expression) {
    value = newText(` = ${translateTypescriptValue(node.assignment.expression)}`);
  }

  return newText(`${keyword}${node.id.text}${type}${value}`);
}

function translateToFunction(
  node: DeclarationStatementNode,
  declarationType: TypescriptDeclarationType,
): Text {
  if (!node.parameters) {
    return newText();
  }

  let keyword = newText();

  if (declarationType !== TypescriptDeclarationType.Attribute) {
    keyword = node.assignment?.expression ? newText(`const `) : newText(`function `);
  }

  const parameters = newText(
    node.parameters.items
      .map((x) => x.statements.first())
      .map((x) =>
        x ? translateTypescriptValueDeclaration(x, TypescriptDeclarationType.Parameter) : newText(),
      ),
    newText(', '),
  );

  let type = newText();

  if (node.annotation?.expression) {
    type = newText(`: ${translateTypescriptType(node.annotation.expression)}`);
  }

  if (node.assignment?.expression) {
    const value = newText(
      ` = ${node.parameters.open.text}${parameters}${
        node.parameters.close?.text ?? ''
      }${type} => ${translateTypescriptType(node.assignment.expression)}`,
    );

    return newText(`${keyword}${node.id.text}${value}`);
  }

  let body = newText();

  if (node.body) {
    body = newText(` ${translateTypescriptBody(node.body.children)}`);
  }

  return newText(
    `${keyword}${node.id.text}${node.parameters.open.text}${parameters}${
      node.parameters.close?.text ?? ''
    }${type}${body}`,
  );
}
