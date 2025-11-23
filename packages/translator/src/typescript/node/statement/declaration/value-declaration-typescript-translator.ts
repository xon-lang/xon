import {
  $DeclarationStatementNode,
  $ExpressionStatementNode,
  $IdNode,
  DeclarationStatementNode,
  Node,
} from '#analyzer';
import {ArrayData, is, newText, Text} from '#core';
import {
  translateTypescriptExpression,
  translateTypescriptStatement,
  TypescriptDeclarationType,
  TypescriptStatementSeparator,
} from '#translator';

export function translateTypescriptValueDeclaration(
  node: Node,
  declarationType: TypescriptDeclarationType,
): Text {
  if (
    (declarationType === TypescriptDeclarationType.Attribute ||
      declarationType === TypescriptDeclarationType.Parameter) &&
    is(node, $ExpressionStatementNode()) &&
    is(node.expression, $IdNode())
  ) {
    return newText(`${node.expression.text}: unknown`);
  }

  if (!is(node, $DeclarationStatementNode()) || !node.id) {
    return newText(`/* error value declaration */`);
  }

  if (node.group) {
    return translateToFunction(node, declarationType);
  }

  const keyword = node.keyword
    ? newText(`${node.keyword?.text} `)
    : declarationType === TypescriptDeclarationType.Variable
    ? newText('export const ')
    : newText();

  let type = newText();

  if (node.annotation?.expression) {
    type = newText(`: ${translateTypescriptExpression(node.annotation.expression, true)}`);
  }

  let value = newText();

  if (node.assignment?.expression) {
    const assignOperator = declarationType === TypescriptDeclarationType.Attribute ? ': ' : ' = ';
    value = newText(`${assignOperator}${translateTypescriptExpression(node.assignment.expression, false)}`);
  }

  return newText(`${keyword}${node.id.text}${type}${value}`);
}

function translateToFunction(
  node: DeclarationStatementNode,
  declarationType: TypescriptDeclarationType,
): Text {
  if (!node.group) {
    return newText();
  }

  let keyword = newText();

  if (declarationType !== TypescriptDeclarationType.Attribute) {
    keyword = node.assignment?.expression ? newText(`const `) : newText(`function `);
  }

  const parameters = newText(
    node.group.items
      .map((x) => x.node)
      .map((x) =>
        x ? translateTypescriptValueDeclaration(x, TypescriptDeclarationType.Parameter) : newText(),
      ),
    newText(', '),
  );

  let type = newText();

  if (node.annotation?.expression) {
    type = newText(`: ${translateTypescriptExpression(node.annotation.expression, true)}`);
  }

  if (node.assignment?.expression) {
    const value = newText(
      ` = ${node.group.open.text}${parameters}${
        node.group.close?.text ?? ''
      }${type} => ${translateTypescriptExpression(node.assignment.expression, false)}`,
    );

    return newText(`${keyword}${node.id.text}${value}`);
  }

  let body = newText();

  if (node.body?.children) {
    body = newText(` ${translateTypescriptFunctionBody(node.body.children)}`);
  }

  return newText(
    `${keyword}${node.id.text}${node.group.open.text}${parameters}${
      node.group.close?.text ?? ''
    }${type}${body}`,
  );
}

function translateTypescriptFunctionBody(body: ArrayData<Node>): Text {
  const translatedBody = newText(
    body.map((x) => translateTypescriptStatement(x, TypescriptStatementSeparator.Semicolon)),
    newText('\n'),
  );

  return newText(`{\n${translatedBody.margin(2)}\n}`);
}
